class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  constructor() {
    this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!
    this.hostElement = document.getElementById('app')! as HTMLDivElement
  }
}
// getting access to template