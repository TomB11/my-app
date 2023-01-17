export class StoryDetail {
  public title: string;
  public description: string;
  public logo: string;
  public role: string;

  constructor(title: string, description: string, logo: string, role: string) {
    this.title = title;
    this.description = description;
    this.logo = logo;
    this.role = role;
  }
}
