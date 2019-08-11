const projects = [
  {
    "name": "Harmony Legal",
    "description": "Law firm management application",
    "duties": [
      "Create API",
      "Design and build front-end",
      "Database design"
    ],
    "thumbnail": "harmony_thumb",
    "mainImage": "harmony_main.png"
  },
  {
    "name": "Informational Porpoises",
    "description": "Taxonomy facts database",
    "duties": [
      "Create API",
      "Design and build front-end",
      "Database design"
    ],
    "thumbnail": "harmony_thumb",
    "mainImage": "ip_main.png"
  },
  {
    "name": "Harmony Legal",
    "description": "Law firm management application",
    "duties": [
      "Create API",
      "Design and build front-end",
      "Database design"
    ],
    "thumbnail": "harmony_thumb",
    "mainImage": "nyan.gif"
  }
]

function choose(e) {
  // $('.carousel').carousel()
  $('#portfolioCarousel').carousel(e)
  // console.log($('.carousel').carousel('1'))
}

function makeCarousel() {
  // Grab the carousel
  let carousel = document.getElementById('portfolioCarousel')

  // Setup the indicators
  let indicators = document.createElement('OL')
  indicators.setAttribute('class', 'carousel-indicators')

  // Setup the carsousel content
  let innerDiv = document.createElement('DIV')
  innerDiv.setAttribute('class', 'carousel-inner')

  for (let [index, project] of projects.entries()) {
    // Indicators
    let indicatorItem = document.createElement('LI')
    indicatorItem.setAttribute('data-target', '#portfolioCarousel')
    indicatorItem.setAttribute('data-slide-to', index)

    // Make the first item active
    if (index === 0) {
      indicatorItem.setAttribute('class', 'active')
    }

    indicators.appendChild(indicatorItem)

    // Carousel content items
    let contentItem = document.createElement('DIV')
    contentItem.setAttribute('class', index === 0 ? 'carousel-item active' : 'carousel-item')

    let contentItemImage = document.createElement('IMG')
    contentItemImage.setAttribute('class', 'd-block w-100')
    contentItemImage.setAttribute('alt', project.name)
    contentItemImage.setAttribute('src', `images/${project.mainImage}`)

    let contentItemCaption = document.createElement('DIV')
    contentItemCaption.setAttribute('class', 'carousel-caption d-none d-md-block caption-block')

    let contentItemLabel = document.createElement('H5')
    contentItemLabel.appendChild(document.createTextNode(project.description))

    let contentItemDescription = document.createElement('P')
    contentItemDescription.appendChild(document.createTextNode(project.duties.join(', ')))

    contentItemCaption.appendChild(contentItemLabel)
    contentItemCaption.appendChild(contentItemDescription)

    contentItem.appendChild(contentItemImage)
    contentItem.appendChild(contentItemCaption)

    innerDiv.appendChild(contentItem)
  }

  // Add indicators to carousel
  carousel.appendChild(indicators)

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

function init() {
  makeCarousel()
}

init()