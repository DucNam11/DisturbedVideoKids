from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.disturbedyoutubevideosdetection import disturbedyoutubeclassifier as dyc

# Load YouTube API key from environment variables or replace with your key
classifier = dyc.DisturbedYouTubeClassifier(youtube_data_api_key='YOUTUBE API KEY')

app = Flask(__name__)
CORS(app)

@app.route('/api/get-video-id', methods=['POST'])
def get_video_id():
    data = request.get_json()
    video_id = data['videoUrl']
    
    # Extract video ID from the URL
    def extract_video_id(url):
        import re
        pattern = re.compile(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*')
        match = pattern.search(url)
        return match.group(1) if match else None

    video_id = extract_video_id(video_id)
    return jsonify({'videoId': video_id})


@app.route('/api/run-model', methods=['POST'])
def correct():
    data = request.get_json()
    video_id = data['videoUrl']
    
    # Extract video ID from the URL
    def extract_video_id(url):
        import re
        pattern = re.compile(r'(?:v=|\/)([0-9A-Za-z_-]{11}).*')
        match = pattern.search(url)
        return match.group(1) if match else None

    video_id = extract_video_id(video_id)


    predicted_class, confidence_score = classifier.predict(video_id=video_id)
    return jsonify({'Result': predicted_class})
    
    
if __name__ == '__main__':
    app.run(debug=True)
