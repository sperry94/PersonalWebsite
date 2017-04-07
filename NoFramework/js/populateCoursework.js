$(() => {
  function Course(title, grade, semester, overview, topicList, paList){
    this.title = title;
    this.grade = grade;
    this.semester = semester;
    this.overview = overview;
    this.topicList = topicList;
    this.paList = paList;
  }

  var courses = [
    new Course('User Centered Design & Dev', 'A', 'Fall 2016', 'Overview of user-centered design principles',
      ['Basic Design Principles', 'Digital Design', 'User Interviewing', 'Other design concepts'],
      ['Design an application for dog owners']),
    new Course('Network Systems', 'A', 'Fall 2016', 'Overview of networks and how they operate.',
      ['UDP/TCP', 'Switching/Routing', 'DNS', 'DHCP', 'Other Networking Concepts'],
      ['UDP-based file transfer', 'HTTP server', 'Distributed file system', 'Web proxy']),
    new Course('Database Systems (Undergrad)', 'A', 'Fall 2016', 'Overview of the relational database model.',
      ['Relational Algebra', 'BCNF/3NF', 'Query Optimization', 'Indexing', 'Other Relational DB Concepts'],
      ['Conversion of existing database to 3NF']),
    new Course('Principles of Programming Languages', 'A', 'Spring 2016', 'Overview of programming language architecture/concepts.',
      ['Programming language implementation'],
      ['Scala implementation of a javascript-like language']),
    new Course('UNIX System Administration', 'A', '', 'Overview of UNIX system administration.',
      [],
      []),
    new Course('Computer Performance Modeling', 'A', 'Spring 2016', 'Overview of methods/tools to model computer performance.',
      [],
      []),
    new Course('Operating Systems', 'A', 'Fall 2015', 'Overview of operating systems concepts.',
      [],
      []),
    new Course('Algorithms', 'A', 'Fall 2015', 'Overview of algorithms.',
      [],
      []),
    new Course('Computer Graphics', 'A', 'Fall 2015', 'Overview of computer graphics (used OpenGL).',
      ['Shape creation', 'OpenGL', 'Z-Buffering', 'Other computer graphics topics'],
      ['3D cathedral that can be navigated in first-person']),
    new Course('Software Dev Methods and Tools', 'A', 'Spring 2015', 'Overview of common Software Engineering methods/tools.',
      [],
      []),
    new Course('Computer Systems', 'A', 'Spring 2015', 'Low-level overview of computer systems.',
      [],
      []),
    new Course('Data Structures', 'A', 'Fall 2013', 'Overview of basic data structures.',
      [],
      []),
    new Course('Applied Probability', 'A', 'Spring 2015', 'Overview of probability concepts.',
      [],
      []),
    new Course('Writing on Science and Society', 'A', 'Spring 2016', 'Overview of best practices in modern scientific writing.',
      [],
      ['Research report on electronic patient care records']),
  ];

  function courseToHtmlText(course) {
    var courseHtml = '<div class="card">' +
                       '<h2>' +
                          course.title +
                       '</h2>' +
                       '<h3>' +
                          'Grade: ' + course.grade +
                       '</h3>' +
                       '<h3>' +
                          'Taken: ' + course.semester +
                       '</h3>' +
                       '<p>' + course.overview + '</p>';

    if(course.topicList && course.topicList.length > 0) {
      courseHtml += '<p>Topics:</p>' +
                    '<ul>';
      course.topicList.forEach((topic) => {
        courseHtml += '<li>' + topic + '</li>'
      });
      courseHtml += '</ul>';
    }

    if(course.paList && course.paList.length > 0) {
      courseHtml += '<p>Major assignments:</p>' +
                    '<ul>';
      course.paList.forEach((pa) => {
        courseHtml += '<li>' + pa + '</li>'
      });
      courseHtml += '</ul>';
    }

    courseHtml += '</div>';

    return courseHtml;
  }

  var courseContainer = $('#courseworkContainer');
  courses.forEach((course) => {
    courseContainer.append(courseToHtmlText(course));
  });
});