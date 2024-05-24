function YoutubeScraper(keyword) {
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();

  var sheet = spreadSheet.getSheetByName(keyword);
  if (!sheet) {
    sheet = spreadSheet.insertSheet(keyword);
  }

  var search = YouTube.Search.list("snippet, id", {
    q: keyword,
    maxResults: 1000,
  });

  var results = search.items.map((item) => [
    item.id.videoId,
    item.snippet.title,
    item.snippet.description,
    item.snippet.thumbnails,
  ]);

  var ids = results.map((id) => id[0]).join(",");
  var stats = YouTube.Videos.list("statistics", { id: ids });

  var videoStats = stats.items.map((item) => [
    item.statistics.viewCount,
    item.statistics.likeCount,
    item.statistics.dislikeCount,
  ]);

  var tags = YouTube.Videos.list("snippet", { id: ids });

  var videoTags = tags.items.map((item) => [item.snippet.tags]);

  sheet.getRange(2, 1, results.length, 4).setValues(results);
  sheet.getRange(2, 5, videoStats.length, 3).setValues(videoStats);
  sheet.getRange(2, 8, videoTags.length, 1).setValues(videoTags);
}

function scrapeAllKeywords() {
  var keywords = [
    "learn colors doctor",
    "superhero fun factory",
    "bloody elsa",
    "frozen elsa poop",
    "frozen elsa kill",
    "spiderman frozen elsa",
    "spiderman kiss elsa",
    "peppa pig kill",
    "frozen elsa spiderman sex",
    "bad baby with tantrum",
    "bad joker kids",
    "toy freaks",
    "buried alive finger family",
    "spiderman undress elsa",
    "pregnant frozen elsa",
    "maleficient joker",
    "frozen elsa and jack",
    "elsa spiderman surgery",
    "frozen elsa arrested",
    "frozen elsa injection",
    "elsa got hurt",
    "joker vampire toilet",
    "spiderman frozen elsa vampire",
    "frozen elsa spiderman toilet",
    "frozen elsa spiderman break up",
    "frozen elsa spiderman pranks",
    "peppa pig gets high",
    "peppa pig dead",
    "frozen elsa dead",
    "minnie mickey pregnancy",
    "spiderman frozen elsa love",
    "spiderman frozen elsa kiss",
  ];

  var keywords2 = [
    "cartoon dziga vertov soviet",
    "soviet toys early russian",
    "russian animation felix goes",
    "kimmy cloud the pardoners",
    "new cartoon hundreds of",
    "of kids and counting",
    "taxi driver and work",
    "cartoon omega compilation learn",
    "colors large ice cream",
    "colors rainbow layer birthday",
    "colors beach balls on",
  ];

  for (var i = 0; i < keywords2.length; i++) {
    YoutubeScraper(keywords2[i]);
    Utilities.sleep(10000); // Đợi 10 giây giữa mỗi lần cào để tránh vượt quá giới hạn API của YouTube
  }
}
scrapeAllKeywords();
