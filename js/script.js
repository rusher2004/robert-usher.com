const hornTooter = "Full-Stack developer experienced in creating dynamic, data-driven applications. Available for part-time and contract work."
const projects = [
  {
    "name": "Harmony Legal",
    "id": "hl",
    "description": "Law firm management application",
    "duties": [
      "Create API",
      "Design and build front-end",
      "Database design"
    ],
    "skills": ['JavaScript', 'Neo4j', 'Node.js', 'HTML', 'CSS'],
    "thumbnail": "harmony_thumb",
    "mainImage": "harmony_main.png",
    "displayImage": "harmony_main.png",
    "url": "https://harmonylegal.com"
  },
  {
    "name": "Informational Porpoises",
    "id": "ip",
    "description": "Taxonomy browser and facts database (work in progress)",
    "duties": [
      "Project Owner",
      "UI Design",
      "Front-end build and design",
      "Back-end server build",
      "database design"
    ],
    "skills": ["JavaScript", "Python", "Neo4j", "Vue.js", "HTML", "CSS"],
    "thumbnail": "harmony_thumb",
    "mainImage": "ip_main.png",
    "displayImage": "ip_main.png",
    "url": "https://informational-porpoises.com"
  },
  {
    "name": "Simply Legal",
    "id": "sl",
    "description": "Immigration eligibility self-check app",
    "duties": [
      "UI updates",
      "User authentication implementation",
      "Database design"
    ],
    "skills": ["JavaScript", "React", "Firebase"],
    "thumbnail": "harmony_thumb",
    "mainImage": "sl_main.png",
    "displayImage": "sl_main.png",
    "url": "https://simplylegalusa.com"
  }
]

function choose(e) {
  $('#portfolioCarousel').carousel(e)
}

function makeCarousel() {
  // Grab the carousel
  let carousel = document.getElementById('portfolioCarousel')

  // Setup the carsousel content
  let innerDiv = document.createElement('DIV')
  innerDiv.setAttribute('class', 'carousel-inner')

  for (let [index, project] of projects.entries()) {
    // Carousel content items
    let contentItem = document.createElement('DIV')
    contentItem.setAttribute('class', index === 0 ? 'carousel-item active' : 'carousel-item')

    let contentItemImage = document.createElement('IMG')
    contentItemImage.setAttribute('class', 'd-block w-100 img-fluid')
    contentItemImage.setAttribute('alt', project.name)
    contentItemImage.setAttribute('src', `images/${project.displayImage}`)

    let contentItemCaption = document.createElement('DIV')
    contentItemCaption.setAttribute('class', 'carousel-caption d-none d-md-block caption-block')

    let contentItemLabel = document.createElement('H5')
    contentItemLabel.appendChild(document.createTextNode(project.description))

    let contentItemDescription = document.createElement('P')
    contentItemDescription.appendChild(document.createTextNode(project.duties.join(', ')))

    contentItemCaption.appendChild(contentItemLabel)
    contentItemCaption.appendChild(contentItemDescription)

    contentItem.appendChild(contentItemImage)
    // contentItem.appendChild(contentItemCaption)

    innerDiv.appendChild(contentItem)
  }

  // Create controls
  let prevLink = document.createElement('A')
  prevLink.setAttribute('class', 'carousel-control-prev carousel-controls prev')
  prevLink.setAttribute('href', '#portfolioCarousel')
  prevLink.setAttribute('role', 'button')
  prevLink.setAttribute('data-slide', 'prev')

  let prevIcon = document.createElement('SPAN')
  prevIcon.setAttribute('class', 'carousel-control-prev-icon')
  prevIcon.setAttribute('aria-hidden', 'true')

  let srPrevIcon = document.createElement('SPAN')
  srPrevIcon.setAttribute('class', 'sr-only')
  srPrevIcon.appendChild(document.createTextNode('Previous'))

  prevLink.appendChild(prevIcon)
  prevLink.appendChild(srPrevIcon)

  let nextLink = document.createElement('A')
  nextLink.setAttribute('class', 'carousel-control-next carousel-controls next')
  nextLink.setAttribute('href', '#portfolioCarousel')
  nextLink.setAttribute('role', 'button')
  nextLink.setAttribute('data-slide', 'next')

  let nextIcon = document.createElement('SPAN')
  nextIcon.setAttribute('class', 'carousel-control-next-icon')
  nextIcon.setAttribute('aria-hidden', 'true')

  let srNextIcon = document.createElement('SPAN')
  srNextIcon.setAttribute('class', 'sr-only')
  srNextIcon.appendChild(document.createTextNode('Next'))

  nextLink.appendChild(nextIcon)
  nextLink.appendChild(srNextIcon)

  // Append the inner div and links into carousel
  carousel.appendChild(innerDiv)
  carousel.appendChild(prevLink)
  carousel.appendChild(nextLink)
}

function makeProjectsTabs () {
  // Grab the container div
  let projectSelector = document.getElementById('projectSelector')

  let tabList = $(document.createElement('UL'))
    .attr({
      class: 'nav nav-pills mb-3 nav-fill',
      id: 'pills-tab',
      role: 'tablist'
    })[0]

  let tabContent = $(document.createElement('DIV'))
    .attr({
      class: 'tab-content',
      id: 'pills-tabContent'
    })[0]

  for (let [index, project] of projects.entries()) {
    let listItem = document.createElement('LI')
    listItem.setAttribute('class', 'nav-item')

    let listItemLink = $(document.createElement('A'))
      .attr({
        class: index === 0 ? 'nav-link active' : 'nav-link',
        id: `pills-${project.id}-tab`,
        "data-toggle": 'pill',
        href: `#pills-${project.id}`,
        role: 'tab',
        "aria-controls": `pills-${project.id}`,
        "aria-selected": index === 0 ? 'true' : 'false'
      })[0]
    listItemLink.appendChild(document.createTextNode(project.name))
    listItemLink.addEventListener('click', () => {choose(index)})
    
    listItem.appendChild(listItemLink)

    tabList.appendChild(listItem)

    let tabContentItem = $(document.createElement('DIV'))
      .attr({
        class: index === 0 ? 'tab-pane fade show active' : 'tab-pane fade',
        role: 'tabpanel',
        id: `pills-${project.id}`,
        "aria-labeled-by": `pills-${project.id}-tab`
      })[0]
    
    // Create some project details
    // Image for mobile
    let tabContentImage = $(document.createElement('img'))
      .attr({
        class: 'd-block w-100 img-fluid d-none d-sm-block d-md-none mobile-image',
        src: `images/${project.displayImage}`,
        alt: project.name
      })[0]
    

    // Description
    let tabContentLabel = document.createElement('h5')
    tabContentLabel.appendChild(document.createTextNode('Purpose: '))

    let tabContentProjectDescription = document.createElement('small')
    tabContentProjectDescription.appendChild(document.createTextNode(project.description))

    tabContentLabel.appendChild(tabContentProjectDescription)

    // Roles
    let tabContentRolesLabel = document.createElement('h5')
    tabContentRolesLabel.appendChild(document.createTextNode('Roles: '))

    let tabContentRoles = document.createElement('small')
    tabContentRoles.appendChild(document.createTextNode(project.duties.join(', ')))

    tabContentRolesLabel.appendChild(tabContentRoles)

    // Tools
    let tabContentToolsLabel = document.createElement('h5')
    tabContentToolsLabel.appendChild(document.createTextNode('Tools: '))

    let tabContentTools = document.createElement('small')
    tabContentTools.appendChild(document.createTextNode(project.skills.join(', ')))

    tabContentToolsLabel.appendChild(tabContentTools)

    // Link
    let tabContentUrl = document.createElement('a')
    tabContentUrl.setAttribute('class', 'project-link')
    tabContentUrl.setAttribute('href', project.url)
    tabContentUrl.setAttribute('target', '_blank')
    tabContentUrl.appendChild(document.createTextNode('check it out'))

    // Add details to tab content
    tabContentItem.appendChild(tabContentImage)
    tabContentItem.appendChild(tabContentLabel)
    tabContentItem.appendChild(tabContentRolesLabel)
    tabContentItem.appendChild(tabContentToolsLabel)
    tabContentItem.appendChild(tabContentUrl)

    tabContent.appendChild(tabContentItem)
  }

  projectSelector.appendChild(tabList)
  projectSelector.appendChild(tabContent)
}

function init() {
  $('.hornTooting')[0].appendChild(document.createTextNode(hornTooter))
  makeCarousel()
  $('#portfolioCarousel').on('slide.bs.carousel', function (e) {
    let skillIcons = document.getElementsByClassName('skill-icon')
    for (icon of skillIcons) {
      icon.style.opacity = 0.4
      icon.style.height = "80%"
    }
   
    for (let skill of projects[e.to].skills) {
      let skillEl = document.getElementById(`skill-${skill}`)
      skillEl.style.opacity = 1
      skillEl.style.height = "100%"
    }

    // Activate the related project tab
    $(`#pills-tab li:nth-child(${e.to + 1}) a`).tab('show')

  })
  // makeProjectCards()
  makeProjectsTabs()
}

init()