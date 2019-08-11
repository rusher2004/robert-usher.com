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
    "name": "Simply Legal",
    "description": "Law firm management application",
    "duties": [
      "Create API",
      "Design and build front-end",
      "Database design"
    ],
    "thumbnail": "harmony_thumb",
    "mainImage": "sl_main.png"
  },
  {
    "name": "Simply Legal",
    "description": "Law firm management application",
    "duties": [
      "Create API",
      "Design and build front-end",
      "Database design"
    ],
    "thumbnail": "harmony_thumb",
    "mainImage": "sl_main.png"
  },
  {
    "name": "Simply Legal",
    "description": "Law firm management application",
    "duties": [
      "Create API",
      "Design and build front-end",
      "Database design"
    ],
    "thumbnail": "harmony_thumb",
    "mainImage": "sl_main.png"
  }
]

function choose(e) {
  $('#portfolioCarousel').carousel(e)
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
    contentItemImage.setAttribute('class', 'd-block w-100 img-fluid')
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
    // contentItem.appendChild(contentItemCaption)

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

function makeProjectCards() {
  // Grab the project-selector div
  let projectSelector = document.getElementsByClassName('project-selector')

  for (let [index, project] of projects.entries()) {
    // Create the card
    let card = document.createElement('DIV')
    card.setAttribute('class', 'card text-center bg-light project shadow')
    card.addEventListener('click', () => {choose(index)})

    // Add elements to card
    let image = document.createElement('IMG')
    image.setAttribute('class', 'card-img-top border rounded')
    image.setAttribute('src', `./images/${project.mainImage}`)

    let cardBody = document.createElement('DIV')
    cardBody.setAttribute('class', 'card-body')

    let cardText = document.createElement('P')
    cardText.setAttribute('class', 'card-text')
    cardText.appendChild(document.createTextNode(project.name))

    cardBody.appendChild(cardText)

    // Put image and body into card
    card.appendChild(image)
    card.appendChild(cardBody)

    // Add card into the project selector
    projectSelector[0].appendChild(card)

  }
}

function init() {
  makeCarousel()
  makeProjectCards()
}

init()