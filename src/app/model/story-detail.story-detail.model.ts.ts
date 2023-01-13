export class StoryDetail {
  public title: string;
  public description: string;
  public logo: string;
  public year: string;
  public projects: Array<Object>;

  constructor(
    title: string,
    description: string,
    logo: string,
    year: string,
    projects: Array<Object>
  ) {
    this.title = title;
    this.description = description;
    this.logo = logo;
    this.year = year;
    this.projects = projects;
  }
}
