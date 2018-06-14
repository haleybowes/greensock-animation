let tl = new TimelineLite()

tl.to('.full-van', 0, { scale: 1.7, left: 120, bottom: 20, delay: 1 })

tl.to('.frame-1', 1, {opacity: 0})

tl.to('.full-van', 2, { scale: 1.7, bottom: 20, left: -200 })

tl.to('.full-van', 2, { scale: 1, bottom: 0, left: -40 })

tl.from('.get-more', 1, {opacity: 0})




