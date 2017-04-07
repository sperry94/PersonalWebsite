$(() => {

  var skillsText = ['Operating Systems: Windows XP/Vista/7/8, OS X, Linux', 'Programming Languages: Java, C++,  HTML, CSS (proficient), C (proficient), C# (proficient), Python (proficient), Javascript (proficient), SQL (proficient)'];

  function Job(jobTitle, jobDate, jobDesc, jobAccomp){
      this.jobTitle = jobTitle;
      this.jobDate = jobDate;
      this.jobDesc = jobDesc;
      this.jobAccomp = jobAccomp;
  }

  function School(schoolTitle, schoolPurpose, schoolDate, schoolGPA, schoolAccomp){
      this.schoolTitle = schoolTitle;
      this.schoolPurpose = schoolPurpose;
      this.schoolDate = schoolDate;
      this.schoolGPA = schoolGPA;
      this.schoolAccomp = schoolAccomp;
  }

  var jobs = [
    new Job('Intern, ZOLL Medical Corporation, Broomfield, CO', '6/2015 - Present', 'Assisted development team in producing an electronic patient care report (ePCR) and evaluating/designing a document-database backend. Used the .NET framework, Visual Studio, MSTest, Microsoft SQL Server, TeamCity, Test-Driven Development, and Agile methodology. Used C#, HTML, Javascript, SQL, Scala, and third-party SDKs.', 'Made updates to the ePCR that were incorporated into the product. Contributed directly to development discussions on the design of a document database backend and its integration with existing products.'),
    new Job('Discovery Learning Apprentice, Sikuli Lab, University of Colorado, Boulder', '9/2015 - 5/2016', 'Used the Craftml.io development environment to create 3D-printable, educational models using a markup language similar to HTML, CSS, and Javascript. Printed certain models to evaluate the printability of the models and improve them. Built most of the models to provide accessibility to disabled users.', 'Developed accessible, educational models for the fields of chemistry, biology, and physics.'),
    new Job('Student Fellow, Ford Lab Cancer Center, University of Colorado, Anschutz', '6/2014 - 8/2014', 'Assisted faculty in studying ovarian cancer through protocol implementation, experimental design, and related tasks.', 'Presented research results to faculty members, students, and visitors.'),
    new Job('Learning Assistant, Chemistry Department, University of Colorado', '1/2014 - 5/2014', 'Participated in the Learning Assistant Program. Assisted students in General Chemistry 1 recitations. Prepared for recitations by attending lectures and meeting with faculty.', 'Assisted students in three separate recitation sections.'),
    new Job('Sales Transaction Assistant, Best Buy, Lakewood, CO', '5/2013 - 8/2013', 'Facilitated customer transactions. Stocked and maintained appearance of checkout lanes.', ''),
    new Job('Student Intern, Dept. of the Interior, Bureau of Land Management, Lakewood, CO', '11/2011 - 5/2013', 'Compiled data reports, maintained supply levels, copied documents, and assisted in other miscellaneous tasks as requested by professionals in the Bureau.', 'Catalogued microfiche collections and assisted the bureau library in documenting books online.'),
    new Job('Front Information Desk Volunteer, Swedish Medical Center, Denver, CO', '7/2009 - 3/2012', 'Greeted and assisted visitors, answered phone calls, delivered patient gifts, and other tasks as assigned by the volunteer Director. ', '250+ hours volunteered.')
    ];

    var education = [
      new School('University of Colorado Boulder', 'MS/BS in Computer Science', '2013 - Present', '3.972', ['Recipient of the CU Boulder Joseph A. Sewall and Engineering Merit Scholarships']),
      new School('St. Anthony\'s Pre-hospital Services', 'AEMT Certification', '2013', '', []),
      new School('Lakewood High School','International Baccalaureate Diploma','2009 - 2013','4.72', ['ACT Score: 35 (Science: 36 | Math: 35)', 'Member of National Honor Society', 'Team Captain and Varsity Member of the Lakewood High School Tennis Team'])
    ];

    function jobToHtmlText(job, index) {
      var jobHeader = '<div role="tab" class="panel-heading">' +
                        '<h3 class="panel-title">' +
                          '<a role="button" data-toggle="collapse" data-parent="#jobsAccordion" href="#jobCollapse' + index + '">' +
                            job.jobTitle +
                          '</a>' +
                        '</h3>' +
                      '</div>';

      var jobBody = '<div id="jobCollapse' + index + '" role="tabpanel" class="panel-collapse collapse">' +
                      '<div class="panel-body">' +
                        '<p><em>' + job.jobDate + '</em></p>' +
                        '<p>' + job.jobDesc + '</p>';
      if(job.jobAccomp !== "")
      {
          jobBody += '<br/>' +
                     '<p><b>Accomplishments:</b><br/>' +
                        job.jobAccomp +
                     '</p>';
      }
      jobBody += '</div>' +
                 '</div>';

      return '<div class="panel panel-default">' +
                jobHeader +
                jobBody +
              '</div>';
    }

    function schoolToHtmlText(school, index) {
      var schoolHeader = '<div role="tab" class="panel-heading">' +
                          '<h3 class="panel-title">' +
                            '<a role="button" data-toggle="collapse" data-parent="#schoolAccordion" href="#schoolCollapse' + index + '">' +
                              school.schoolTitle + ', ' + school.schoolPurpose +
                            '</a>' +
                          '</h3>' +
                        '</div>';

      var schoolBody = '<div id="schoolCollapse' + index + '" role="tabpanel" class="panel-collapse collapse">' +
                        '<div class="panel-body">' +
                          '<p>Dates Attended: <em>' + school.schoolDate + '</em></p>';

      if(school.schoolGPA !== '') {
        schoolBody += '<p>GPA: ' + school.schoolGPA + '</p>';
      }

      if(school.schoolAccomp && school.schoolAccomp.length > 0) {
        schoolBody += '<br/><p><b>Accomplishments:</b><br/>';
        school.schoolAccomp.forEach((schoolAccomp) => {
          schoolBody += schoolAccomp + '<br/>';
        });
        schoolBody += '</p>';
      }

      schoolBody += '</div>' +
                 '</div>';

      return '<div class="panel panel-default">' +
                schoolHeader +
                schoolBody +
              '</div>';
    }

    //setting up jobs accordion
    var jobsAccordion = $('#jobsAccordion');
    jobs.forEach((job, index) => {
      jobsAccordion.append(jobToHtmlText(job, index));
    });

    //setting up education accordion
    var schoolAccordion = $('#schoolAccordion');
    education.forEach((school, index) => {
      schoolAccordion.append(schoolToHtmlText(school, index));
    });
});
