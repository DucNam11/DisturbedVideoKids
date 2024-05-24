function addData(sheet) {
  var dataRange = sheet.getDataRange();
  var lastRow = dataRange.getLastRow();
  var videoIDColumn = 1;
  var videoIDValues = sheet
    .getRange(2, videoIDColumn, lastRow - 1, 1)
    .getValues();
  var videoIDs = videoIDValues.map(function (row) {
    return row[0];
  });

  // Thực hiện cuộc gọi API để lấy thông tin thêm về các video
  var videosInfo = YouTube.Videos.list("snippet", {
    id: videoIDs.join(","),
  }).items;
  var contentDetails = YouTube.Videos.list("contentDetails", {
    id: videoIDs.join(","),
  }).items;
  var statistics = YouTube.Videos.list("statistics", {
    id: videoIDs.join(","),
  }).items;

  // Bổ sung thông tin mới vào sheet
  var newData = [];
  for (var i = 0; i < videosInfo.length; i++) {
    var videoInfo = videosInfo[i];
    var contentDetail = contentDetails[i];
    var statistic = statistics[i];
    if (videoInfo) {
      var snippet = videoInfo.snippet;
      var kind = videoInfo.kind;
      var etag = videoInfo.etag;
      var cD = contentDetail.contentDetails;
      var st = statistic.statistics;
      newData.push([
        kind || "",
        snippet.publishedAt || "",
        etag || "",
        snippet.channelId || "",
        snippet.channelTitle || "",
        snippet.categoryId || "",
        snippet.liveBroadcastContent || "",
        cD.duration || "",
        cD.dimension || "",
        cD.definition || "",
        cD.caption || "",
        cD.licensedContent || "",
        cD.contentRating || "",
        cD.projection || "",
        st.favoriteCount || "",
        st.commentCount || "",
      ]);
    } else {
      newData.push(["", "", "", "", "", "", ""]); // Nếu không tìm thấy thông tin của video, thêm các giá trị rỗng
    }
  }

  // Ghi thông tin mới vào sheet
  var additionalInfoRange = sheet.getRange(
    2,
    10,
    newData.length,
    newData[0].length
  );
  additionalInfoRange.setValues(newData);
}

function addDataToAllSheets() {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheetNames = ["hic cup pup part", "superhero fun factory"];
  for (var i = 0; i < sheetNames.length; i++) {
    var sheetName = sheetNames[i];
    var sheet = spreadSheet.getSheetByName(sheetName);
    if (sheet) {
      addData(sheet);
    } else {
      console.error("Không tìm thấy sheet có tên '" + sheetName + "'");
    }
  }
}
addDataToAllSheets();
