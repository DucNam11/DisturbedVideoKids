// import React, { useState } from 'react';
// import axios from 'axios';
// import VideoInfo from './components/VideoInfo';
// // import NavigationBar from './components/NavigationBar';


// function App() {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [videoData, setVideoData] = useState(null);
//   const [detectResult, setDetectResult] = useState('');

//   const extractVideoId = (url) => {
//     const urlObj = new URL(url);
//     const urlParams = new URLSearchParams(urlObj.search);
//     return urlParams.get('v');
//   };

//   const handleInputChange = (event) => {
//     setVideoUrl(event.target.value);
//   };

//   const handleCheckVideo = async () => {
//     try {
//       const videoId = extractVideoId(videoUrl);
//       const apiKey = 'AIzaSyC52OPvWyvZGfPoBBkN1dYixK1EJY6C5HY';
//       const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${apiKey}`);
//       const video = response.data.items[0];

//       const videoData = {
//         videoId: video.id,
//         title: video.snippet.title,
//         description: video.snippet.description,
//         thumbnails: video.snippet.thumbnails.high.url, // Sử dụng thumbnail có độ phân giải cao
//         viewCount: video.statistics.viewCount,
//         likeCount: video.statistics.likeCount,
//         dislikeCount: video.statistics.dislikeCount,
//         videoTags: video.snippet.tags || []
//       };

//       setVideoData(videoData);
      
//       // Call your detect function (mocked here)
//       const detectResult = await detectVideo(videoData);
//       setDetectResult(detectResult);
//     } catch (error) {
//       console.error('Error fetching video data', error);
//     }
//   };

//   const detectVideo = async (videoData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/run-model', {
//         videoUrl: `https://www.youtube.com/watch?v=${videoData.videoId}`
//       });
//       return response.data.Result;
//     } catch (error) {
//       console.error('Error detecting video', error);
//       return 'Error';
//     }
//   };

//   return (
//     <div className="App">
//       <h1>YouTube Kids Video Detection</h1>
//       <input
//         type="text"
//         value={videoUrl}
//         onChange={handleInputChange}
//         placeholder="Enter YouTube Video URL"
//       />
//       <button onClick={handleCheckVideo}>Check</button>
//       {videoData && <VideoInfo videoData={videoData} />}
//       {detectResult && (
//         <div className="DetectionResult">
//           <h2>Detection Result</h2>
//           <p>{detectResult}</p>
//         </div>
//       )}
//     </div>
    
//   );
// }
// export default App;

//========================NEW GUI==============================//

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/nav';
import VideoInfo from './components/VideoInfo';
import './App.css';

function Home() {
  const heroBackgroundImage = "url('https://i.ibb.co/nMrcYYR/maxresdefault.jpg')";
  const quynhImage = "https://i.ibb.co/Cw4cfCH/IMG-9686-2.jpg";
  const namImage = "https://i.ibb.co/KzFnc7P/441995306-943075274172281-4345338560861518810-n.jpg";
  const thangImage = "https://i.ibb.co/Nshzmh2/441569339-350091561046841-1589877971331022347-n.jpg";
  const samImgae = "https://i.ibb.co/7bKVrsz/441482141-1512420505979382-7012099568020734017-n.jpg";

  return (
    <section id="result">
      <div>
        <section className="hero" style={{ backgroundImage: heroBackgroundImage, backgroundSize: 'contain' }}>
          <div className="hero-content">
            <h1 id="hero-page-heading">Welcome to the Detecting Inappropriate Videos Targeting Young Children Project</h1>
            <p id="hero-page-text">
              Detecting Inappropriate Videos Targeting Young Children
            </p>
            <Link to="/app" className="cta-button">Get Started</Link>
          </div>
        </section>
      </div>
      <p><strong>Thực hiện:</strong></p>
      <div className="team-section">
        <div className="team-member">
          <div className="rounded-image-container">
            <img src={quynhImage} alt="Ta Khanh Ly" className="rounded-image" />
          </div>
          Vương Thị Diễm Quỳnh <br />
          MSV 21000415
        </div>
        <div className="team-member">
          <div className="rounded-image-container">
            <img src={namImage} alt="Nam Anh" className="rounded-image" />
          </div>
          Nguyễn Đức Nam <br />
          MSV 2100xxxx
        </div>
        <div className="team-member">
          <div className="rounded-image-container">
            <img src={samImgae} alt="Khanh Huyen" className="rounded-image" />
          </div>
          Nguyễn Thị Huyền Sâm <br />
          MSV 21002170
        </div>
        <div className="team-member">
          <div className="rounded-image-container">
            <img src={thangImage} alt="Vuong Thi Diem Quynh" className="rounded-image" />
          </div>
          Nguyễn Thị Thắng <br />
          MSV 21002174
        </div>
      </div>
      <p><strong>Giáo viên hướng dẫn:</strong> TS. Lê Hoàng Sơn, ThS. Hoàng Thị Cành </p>
      <h2>Project Resources</h2>
      <p><strong>Báo cáo:</strong> <a href="link_to_your_report.pdf" target="_blank">Read the Report</a></p>
      <p><strong>Mã nguồn:</strong> <a href="link_to_your_github_repository" target="_blank">GitHub Repository</a></p>
      <p><strong>Hướng Dẫn Cài Đặt và Chạy:</strong></p>
      <ol>
        <li>Clone the GitHub repository: <code>git clone https://github.com/your-username/your-repository.git</code></li>
        <li>Navigate to the project directory: <code>cd your-repository</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Run the code: <code>npm start</code></li>
      </ol>
      <h2>Application</h2>
      <p><strong>Try it out:</strong> <a href="/app" target="_self">Here</a></p>
    </section>
  );
}

function Algorithm() {
  const algorithmGif = "https://i.ibb.co/fCYN9FG/Screenshot-2024-05-18-at-11-26-57-PM.png";

  return (
    <div id="result" className="model-container">
      <section>
        <h1>Giới thiệu đề tài</h1>
        <h2>Bối cảnh</h2>
        <p>
        Trong những năm gần đây, sự phát triển của Internet và sự phổ biến của mạng xã hội Youtube đã mở ra một thế giới nội dung giải trí và giáo dục cho tất cả mọi người ở mọi lứa tuổi. Trong đó đặc biệt phải kể đến đối tượng trẻ nhỏ. Đây là đối tượng được một lượng lớn các nhà sáng tạo nội dung nhắm tới. Những nội dung dành cho trẻ em trên Youtube chiếm đa số và không ngừng tăng lên. Dưới đây là thống kê về Những video phổ biến nhất trên YouTube tính theo tổng lượt xem toàn cầu tính đến tháng 01 năm 2024 được thực hiện bởi trang Statista [1]. Trong số 10 video có lượt xem nhiều nhất thế giới thì có tới 6 video là dành cho trẻ em. 

        </p>
        <div>
          <img src={algorithmGif} alt="Algorithm" className="algorithm-gif" />
        </div>
        <p>
        Có thể thấy, trẻ em là khán giả đông đảo nhất trên thế giới của Youtube. Chúng xem video mà không bỏ qua quảng cáo, thậm chí không cần quan tâm đến chất lượng của video. Chúng có thể xem mọi thứ lặp đi lặp lại không ngừng. 

        </p>
        <h2>Vấn đề</h2>
        <p>Lợi dụng chính những đặc thù này, một số nhà sáng tạo nội dung đã sản xuất những video chứa nội dung không phù hợp, thiếu lành mạnh có khả năng gây hại nhưng lại gắn mác chúng là video dành cho trẻ em và nhắm tới đối tượng xem là trẻ nhỏ. Đó là một xu hướng mang tên Elsagate. </p>
        <p><strong>Elsagate</strong> là thuật ngữ xuất hiện lần đầu tiên vào năm 2017 được dùng để đề cập đến làn sóng video gây tranh cãi trên YouTube sử dụng các nhân vật nổi tiếng trong các chương trình dành cho trẻ em, chẳng hạn như Elsa trong phim “Frozen” của Disney để thu hút người xem nhỏ tuổi. Tuy nhiên, những video này thường chứa nội dung rất không phù hợp và gây phản cảm, bao gồm bạo lực, ám chỉ tình dục và hình ảnh phản cảm được ngụy trang thành nội dung dành cho trẻ nhỏ. Bản thân thuật ngữ “Elsagate” bắt nguồn từ việc nhân vật Elsa được sử dụng phổ biến trong các video này.
        </p>

        <h2>Các giải pháp hiện có</h2>
        <p>
        Từ phía YouTube: Để giải quyết những lo ngại ngày càng tăng, YouTube đã triển khai các chính sách và thuật toán chặt chẽ hơn để phát hiện và xóa nội dung không phù hợp. Họ cũng đã tắt tính năng kiếm tiền của các kênh bị phát hiện đang sản xuất video Elsagate. </p>
<p>Ngoài ra, YouTube cũng đã tăng số lượng người kiểm duyệt và cho ra mắt các công nghệ AI tiên tiến để xác định và xóa các video Elsagate hiệu quả hơn. Việc cộng tác với những người sáng tạo nội dung đáng tin cậy và lôi kéo cộng đồng YouTube gắn cờ những nội dung như vậy cũng đã được chứng minh là mang lại lợi ích. </p>
<p> Bên cạnh đó, Youtube đã cho ra đời YoutubeKid. Đây là một ứng dụng chỉ cho phép đăng tải các video phù hợp với trẻ nhỏ. YoutubeKid không công khai về các công nghệ mà họ sử dụng. Tuy nhiên, thực tế cho thấy, YoutubeKid không thực sự an toàn và hiệu quả. Theo các bài đăng trên Quora và Reddit [3][4], rất nhiều người dùng đã chỉ ra rằng, YoutubeKid không thể quản lý được hết lượng video khổng lồ trên ứng dụng này. Vì vậy, rất nhiều video với nội dung không phù hợp vẫn được đề xuất cho trẻ em. </p>
<p> Một giải pháp khác được đưa ra bởi bài báo [5]. Trong bài, các tác giả sử dụng một kiến trúc học sâu để phát hiện và phân loại các nội dung không phù hợp. Cụ thể Video Frames sẽ được trích xuất liên tục từ video đầu vào. Các Video Frames này sau đó được đưa qua mô hình CNN EficientNet-B7 để trích xuất đặc trưng. Sau đó, các đặc trưng được đưa qua BiLSTM để học và đưa ra dự đoán. Kết quả thực nghiệm cho thấy mô hình này thực hiện khá tốt với độ chính xác lên đến hơn 95%. </p>

        
        <h2> Đánh giá tình hình

        </h2>
        <p>
        Mặc dù YouTube đã có những nỗ lực đáng khen ngợi để giải quyết hiện tượng Elsagate nhưng cuộc chiến chống lại nội dung không phù hợp nhắm mục tiêu đến trẻ em vẫn chưa kết thúc. 
Một báo cáo có tên “YouTubers Not madeForKids: Detecting Channels Sharing Inappropriate Videos Targeting Children” [6] đã chỉ ra rằng: “Gần 60% các video đã được ghi chú và phân loại là gây rối bởi một nghiên cứu cũ vào năm 2019 [2] vẫn còn tồn tại trên YouTube vào giữa năm 2021. Trong khi đó, 44% các kênh đã tải lên các video gây rối như vậy vẫn chưa bị đình chỉ và video của họ vẫn chưa bị xóa.”
        </p>
        <h2>
        Đề xuất giải pháp

        </h2>
        <p> 
        Trong bài nghiên cứu này, nhóm sẽ đề xuất một cách giải quyết khác cho vấn đề trên. Để dự đoán một video có phù hợp với trẻ em hay không, nhóm nghiên cứu sẽ thu thập các thuộc tính như Title, categoryID, viewCount, thumbnail,... Các thuộc tính này sẽ được phân vào các lớp xử lý khác nhau của mô hình, sau đó kết hợp lại và cho ra kết quả cuối cùng.

        </p>

      </section>
    </div>
  );
}


function Detect() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [detectResult, setDetectResult] = useState('');
  const [output, setOutput] = useState(''); // Thêm khai báo biến output

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    const urlParams = new URLSearchParams(urlObj.search);
    return urlParams.get('v');
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleCheckVideo = async () => {
    try {
      const videoId = extractVideoId(videoUrl);
      const apiKey = 'AIzaSyDSluHP-FTPDk9qtCKZnDmkKYNRoENquDk'; // Thay thế bằng API key của bạn
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${apiKey}`);
      const video = response.data.items[0];

      const videoData = {
        videoId: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnails: video.snippet.thumbnails.high.url,
        viewCount: video.statistics.viewCount,
        likeCount: video.statistics.likeCount,
        dislikeCount: video.statistics.dislikeCount,
        videoTags: video.snippet.tags || []
      };

      setVideoData(videoData);

      // Call your detect function (mocked here)
      const detectResult = await detectVideo(videoData);
      setDetectResult(detectResult);
    } catch (error) {
      console.error('Error fetching video data', error);
    }
  };

  const detectVideo = async (videoData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/run-model', {
        videoUrl: `https://www.youtube.com/watch?v=${videoData.videoId}`
      });
      return response.data.Result;
    } catch (error) {
      console.error('Error detecting video', error);
      return 'Error';
    }
  };

  return (
    <div id="result" className="run-model-container">
      <h1>YouTube Kids Video Detection</h1>
      <input
        type="text"
        value={videoUrl}
        onChange={handleInputChange}
        placeholder="Enter YouTube Video URL"
        style={{
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          boxSizing: 'border-box',
          border: '2px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      />
      <button onClick={handleCheckVideo}>Check</button>
      {videoData && <VideoInfo videoData={videoData} />}
      {detectResult && (
        <div className="DetectionResult">
          <h2>Detection Result</h2>
          <p>{detectResult}</p>
        </div>
      )}
  
      <div className="output">
        <h3>Detection Result:</h3>
        <pre>{detectResult}</pre>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithm" element={<Algorithm />} />
          <Route path="/app" element={<Detect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
