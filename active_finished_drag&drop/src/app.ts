class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  constructor() {
    this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!
    this.hostElement = document.getElementById('app')! as HTMLDivElement

    const importedNode = document.importNode(this.templateElement.content, true)


  }
}
// getting access to template