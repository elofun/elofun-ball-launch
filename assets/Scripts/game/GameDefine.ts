export default new (class GameDefine {
  public DiamondScore = 2;
  public PlayTime = 300;
  public player =
    window.language.toUpperCase() == "VI" ? "Người chơi" : "Player";
  public died =
    window.language.toUpperCase() == "VI" ? "đã chết." : "has died.";
  public gameover =
    window.language.toUpperCase() == "VI" ? "KẾT THÚC" : "GAMEOVER";
  public disconnect =
    window.language.toUpperCase() == "VI" ? "MẤT KẾT NỐI" : "LOST CONNECTION";
  public hasdisconnect =
    window.language.toUpperCase() == "VI"
      ? "đã mất kết nối."
      : "has been disconnected.";
  public hosting =
    window.language.toUpperCase() == "VI"
      ? "sẽ trở thành chủ phòng."
      : "is now hosting.";

  public degree: number = 2;
  public ObstaclesWall = { hight: 133, width: 133 };
})();
