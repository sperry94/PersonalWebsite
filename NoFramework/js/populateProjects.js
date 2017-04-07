$(() => {
  function Project(title, description){
    this.title = title;
    this.description = description;
  }

  var projects = [
    new Project('CoMake',
    'A project that links to <a href="https://craftml.io/" target="_blank">CraftML</a>, which allows users to position 3D models in relation to one another on a canvas. The resulting layout can be exported to CraftML code, which can in turn be converted to a 3D-printable SVG file.'),
    new Project('Attack of the Triangles',
    'A simple game made using Unity. Triangles descend towards stationary squares and must be destroyed by shooting circles at them.'),
    new Project('TwitterFeels',
    'A website that allows users to search recent tweets for keywords. The search results are analyzed for positive/negative sentiment and the average sentiment of each state is conveyed through a colored map of the United States.'),
    new Project('This website!',
    'This website, including the backend server to handle the contact-form submission, was written by me! Code and references (in the GitHub wiki) can be found in the <a href="https://github.com/sperry94/PersonalWebsite" target="_blank">GitHub repo</a>'),
  ];

  function projectToHtmlText(proj) {
    return '<div class="contentSection">' +
             '<h2>' +
                proj.title +
             '</h2>' +
             '<p>' +
                proj.description +
             '</p>' +
           '</div>';
  }

  var contentSection = $('#content');
  projects.forEach((proj) => {
    contentSection.append(projectToHtmlText(proj));
  });
});