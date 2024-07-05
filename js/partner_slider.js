document.addEventListener("DOMContentLoaded", function () {
  const slideTrack = document.getElementById("slideTrack")
  const slides = document.querySelectorAll(".slide")
  const numSlides = slides.length

  // Duplicate slides
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true)
    slideTrack.appendChild(clone)
  })

  // Calculate total width
  const slideWidth = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--slide-width")
  )
  const slideGap = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--slide-gap")
  )

  // Set CSS variables dynamically
  document.documentElement.style.setProperty("--num-slides", numSlides)
  document.documentElement.style.setProperty(
    "--total-width",
    `${(slideWidth + slideGap) * numSlides}px`
  )

  // Update animation duration based on number of slides
  const animationDuration = `${numSlides * 6}s` // Adjust the multiplier for speed
  document.documentElement.style.setProperty(
    "--animation-duration",
    animationDuration
  )
})
