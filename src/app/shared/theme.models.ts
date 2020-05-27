export class Theme {
    name: string;
    path: string;
    contentBorderColor: string;
    contentBackgroundColor: string;
    themeType: string;
  
    constructor(name: string, path: string, contentBorderColor: string, contentBackgroundColor: string, themeType: string) {
      this.name = name;
      this.path = path;
      this.contentBorderColor = contentBorderColor;
      this.contentBackgroundColor = contentBackgroundColor;
      this.themeType = themeType;
    }
  }

  export class Themes {
    themes: Theme[];
  
    constructor() {
      this.themes = this.getThemes();
    }
  
    getThemes(): Theme[] {
      var themeArray: Theme[] = [];
      var basePath: string = "assets/themes/resources/themes/";
      var endPath: string = "/theme.css";
  
  
  
      themeArray.push(new Theme("Afterdark", basePath + "afterdark" + endPath, "#262626", "#4d4d4d", "light"));
      themeArray.push(new Theme("Afternoon", basePath + "afternoon" + endPath, "#9d9d9d", "#ffffff", "light"));
      themeArray.push(new Theme("Afterwork", basePath + "afterwork" + endPath, "#8c8c8c", "#eeeeee", "light"));
      themeArray.push(new Theme("Aristo", basePath + "aristo" + endPath, "#a8a8a8", "#ffffff", "light"));
      themeArray.push(new Theme("Black-Tie", basePath + "black-tie" + endPath, "#cccccc", "#f9f9f9", "light"));
      themeArray.push(new Theme("Blitzer", basePath + "blitzer" + endPath, "#eeeeee", "#ffffff", "light"));
      themeArray.push(new Theme("Bluesky", basePath + "bluesky" + endPath, "#bed6f8", "#ffffff", "light"));
      themeArray.push(new Theme("Bootstrap", basePath + "bootstrap" + endPath, "#dddddd", "#ffffff", "light"));
      themeArray.push(new Theme("Casablanca", basePath + "casablanca" + endPath, "#bbb1aa", "#ffffff", "light"));
      themeArray.push(new Theme("Cruze", basePath + "cruze" + endPath, "#666666", "#575757", "light"));
      themeArray.push(new Theme("Cupertino", basePath + "cupertino" + endPath, "#dddddd", "#f2f5f7", "light"));
      themeArray.push(new Theme("Dark-Hive", basePath + "dark-hive" + endPath, "#555555", "#000000", "light"));
      themeArray.push(new Theme("Delta", basePath + "delta" + endPath, "#d5d5d5", "#ffffff", "light"));
      themeArray.push(new Theme("Dot-Luv", basePath + "dot-luv" + endPath, "#000000", "#111111", "light"));
      themeArray.push(new Theme("Eggplant", basePath + "eggplant" + endPath, "#7e7783", "#3d3644", "light"));
      themeArray.push(new Theme("Excite-Bike", basePath + "excite-bike" + endPath, "#aaaaaa", "#eeeeee", "light"));
      themeArray.push(new Theme("Flick", basePath + "flick" + endPath, "#dddddd", "#ffffff", "light"));
      themeArray.push(new Theme("Glass-X", basePath + "glass-x" + endPath, "#acbece", "#ffffff", "light"));
      themeArray.push(new Theme("Home", basePath + "home" + endPath, "#cccccc", "#F2F1F1", "light"));
      themeArray.push(new Theme("Hot-Sneaks", basePath + "hot-sneaks" + endPath, "#aaaaaa", "#aaaaaa", "light"));
      themeArray.push(new Theme("Humanity", basePath + "humanity" + endPath, "#e0cfc2", "#f4f0ec", "light"));
      themeArray.push(new Theme("Le-Frog", basePath + "le-frog" + endPath, "#72b42d", "#285c00", "light"));
      themeArray.push(new Theme("Midnight", basePath + "midnight" + endPath, "#18181f", "#18181f", "light"));
      themeArray.push(new Theme("Mint-Choc", basePath + "mint-choc" + endPath, "#9c947c", "#201913", "light"));
      themeArray.push(new Theme("Omega", basePath + "omega" + endPath, "#d5d5d5", "#ffffff", "light"));
      themeArray.push(new Theme("Overcast", basePath + "overcast" + endPath, "#aaaaaa", "#c9c9c9", "light"));
      themeArray.push(new Theme("Pepper-Grinder", basePath + "pepper-grinder" + endPath, "#d9d6c4", "#eceadf", "light"));
      themeArray.push(new Theme("Redmond", basePath + "redmond" + endPath, "#a6c9e2", "#fcfdfd", "light"));
      themeArray.push(new Theme("Rocket", basePath + "rocket" + endPath, "#e3e3e3", "#f1f1f1", "light"));
      themeArray.push(new Theme("Sam", basePath + "sam" + endPath, "#aaaaaa", "#ffffff", "light"));
      themeArray.push(new Theme("Smoothness", basePath + "smoothness" + endPath, "#aaaaaa", "#ffffff", "light"));
      themeArray.push(new Theme("South-Street", basePath + "south-street" + endPath, "#dfd9c3", "#f5f3e5", "light"));
      themeArray.push(new Theme("Start", basePath + "start" + endPath, "#a6c9e2", "#fcfdfd", "light"));
      themeArray.push(new Theme("Sunny", basePath + "sunny" + endPath, "#8e846b", "#feeebd", "light"));
      themeArray.push(new Theme("Swanky-Purse", basePath + "swanky-purse" + endPath, "#efec9f", "#443113", "light")); 
      themeArray.push(new Theme("Trontastic", basePath + "trontastic" + endPath, "#4a4a4a", "#000000", "light"));
      themeArray.push(new Theme("UI-Darkness", basePath + "ui-darkness" + endPath, "#666666", "#000000", "light"));
      themeArray.push(new Theme("UI-Lightness", basePath + "ui-lightness" + endPath, "#dddddd", "#eeeeee", "light"));
      themeArray.push(new Theme("Vader", basePath + "vader" + endPath, "#404040", "#121212", "light"));
  
      return themeArray;
    }
  }