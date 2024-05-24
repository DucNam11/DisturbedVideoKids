# Phân loại video không phù hợp nhắm tới trẻ nhỏ

## Tổng quan
Trong những năm gần đây, sự phát triển của Internet và sự phổ biến của mạng xã hội Youtube đã mở ra một thế giới nội dung giải trí và giáo dục cho tất cả mọi người ở mọi lứa tuổi. Trong đó đặc biệt phải kể đến đối tượng trẻ nhỏ. Đây là đối tượng được một lượng lớn các nhà sáng tạo nội dung nhắm tới. Những nội dung dành cho trẻ em trên Youtube chiếm đa số và không ngừng tăng lên. Thống kê về những video phổ biến nhất trên YouTube tính theo tổng lượt xem toàn cầu tính đến tháng 01 năm 2024 được thực hiện bởi trang Statista, trong số 10 video có lượt xem nhiều nhất thế giới thì có tới 6 video là dành cho trẻ em. 

Để giải quyết vấn đề này, một mô hình phân loại được xây dựng có khả năng phân biệt nội dung không phù hợp nhắm vào trẻ mới biết đi trên YouTube với độ chính xác 72,3%.

## Phương pháp đề xuất
![Model Architecture Diagram](https://github.com/DucNam11/DisturbedVideoKids/blob/master/model_architecture.png)

Mô hình phân loại bao gồm bốn nhánh khác nhau, trong đó mỗi nhánh xử lý một loại tính năng riêng biệt: tiêu đề, thẻ, hình thu nhỏ, số liệu thống kê. Sau đó, đầu ra của tất cả các nhánh được nối để tạo thành một mạng nơ-ron hai lớp, được kết nối đầy đủ, hợp nhất đầu ra của chúng và đưa ra quá trình phân loại cuối cùng.

Tiêu đề được đưa vào lớp nhúng có thể huấn luyện để tạo ra vectơ 32 chiều cho mỗi từ trong văn bản tiêu đề. Sau đó, đầu ra của lớp nhúng được đưa đến Mạng LSTM (RNN) để nắm bắt mối quan hệ giữa các từ trong tiêu đề. Đối với các thẻ, một nhánh giống hệt về mặt kiến ​​trúc với nhánh tiêu đề đước ử dụng.

Đối với hình thu nhỏ, do số lượng ví dụ đào tạo trong tập dữ liệu có hạn nên phương pháp học chuyển giao và Mạng thần kinh chuyển đổi Inception-v3 (CNN) được đào tạo trước, được xây dựng từ tập dữ liệu ImageNet quy mô lớn.CNN được sử dụng để trích xuất biểu diễn đặc điểm có ý nghĩa (vectơ 2.048 chiều) của mỗi hình thu nhỏ. Cuối cùng, số liệu thống kê được đưa vào mạng lưới thần kinh dày đặc được kết nối đầy đủ bao gồm 23 đơn vị.

Phần thứ hai của mô hình về cơ bản là một mạng lưới thần kinh dày đặc hai lớp, được kết nối đầy đủ. Ở lớp đầu tiên, (được gọi là Mạng kết hợp), các đầu ra của bốn nhánh hợp nhất lại với nhau, tạo ra một vectơ 2.135 chiều. Vectơ này sau đó được xử lý bởi 512 đơn vị của Mạng kết hợp. Tiếp theo, để tránh các vấn đề có thể xảy ra over-fitting, kỹ thuật Drop-out được sử dụng với mức d=0,5, có nghĩa là trong mỗi lần lặp lại quá trình đào tạo, một nửa số đơn vị trong lớp này không cập nhật các tham số của chúng. Cuối cùng, đầu ra của Mạng kết hợp được đưa đến mạng thần kinh lớp dày đặc cuối cùng gồm bốn đơn vị có kích hoạt softmax, về cơ bản là xác suất mà một video cụ thể phù hợp, gây nhiễu, bị hạn chế hoặc không liên quan.

## Hướng dẫn cài đặt và sử dụng

### Hướng dẫn cài đặt

Các gói cần cài đặt trước khi chạy:

Node.js và npm: Sử dụng lệnh sau để kiểm tra version đã cài đặt:

```bash
node -v
npm -v
```

Nếu kết quả trả về version của Node.js và npm, có nghĩa là bạn đã cài đặt thành công. Nếu không, vui lòng tiến hành cài đặt lại.

**Bước 1:** Clone Repository

```bash
git clone https://github.com/DucNam11/DisturbedVideoKids
```

**Bước 2:** Cài đặt requirements cho mô hình:

```bash
pip install -r requirements.txt
```

**Bước 3:** Cài Đặt Dependencies:

```bash
pip install flask
python3 app.py  # hoặc python app.py
```

Sau khi chạy thành công lệnh `python3 app.py` hoặc `python app.py`, terminal sẽ hiển thị:

```vbnet
 * Serving Flask app 'app'
 * Debug mode: on
INFO:werkzeug:WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
INFO:werkzeug:Press CTRL+C to quit
INFO:werkzeug: * Restarting with stat
```

Tiếp theo, mở một terminal mới và di chuyển vào thư mục react_app:

```bash
cd react_app
npm install react-scripts --save
npm install react-router-dom
npm start
```

Sau khi chạy thành công câu lệnh `npm start`, màn hình giao diện sẽ được hiển thị tại: [http://localhost:3000/](http://localhost:3000/)

### Hướng dẫn sử dụng

#### Giao diện phần Ứng dụng (APPLICATION):

1. Truy cập vào Home page của dự án.
2. Trên Nav bar, bạn có thể click vào "APPLICATION" hoặc trên hero page click vào nút "Get Started" để di chuyển tới phần ứng dụng.

**Bước 1:** Copy URL của một video Youtube bất kỳ và dán vào ô textfield trên giao diện.

**Bước 2:** Sau khi hoàn tất bước 1, click vào nút "Check" ngay bên cạnh để chạy mô hình. Đợi khoảng 4-5 giây để màn hình hiển thị kết quả.

**Bước 3:** Kết quả trả về là nhãn dự đoán của video.
