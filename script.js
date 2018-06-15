let tl = new TimelineLite()


tl.to('.full-van', 0, { scale: 1.7, left: 120, bottom: 20, delay: 1 })

tl.from('.text-1', 1, {ease: Circ.easeOut, right: 200})
tl.to('.text-1', 0.5, { left: 300, delay:1 })

tl.to('.frame-1', 1, {opacity: 0, delay: 0.5}, '-=0.5')

tl.from('.text-2', 1, { ease: Circ.easeOut, right: 300 })
tl.from('.gradient', 1, { opacity: 0}, '-=2')
tl.to('.text-2', 0.5, {left: 300, delay: 1.5}, '-=0.5')


tl.to('.full-van', 1, { scale: 1.7, bottom: 20, left: -200 })



tl.from('.text-3', 1, { ease: Circ.easeOut, right: 300 })
tl.to('.text-3', 0.5, { left: 300, delay: 1 })

tl.to('.gradient', 1, { opacity: 0 })

tl.to('.full-van', 2, { scale: 1, bottom: 0, left: -40 }, '-=1')

tl.from('.text-4', 1, { ease: Circ.easeOut, right: 300 }, '-=1')
tl.from('.text-5', 1, { ease: Elastic.easeOut.config(1, 0.5), right: 300, delay: 0.5})

tl.from('.get-more', 0.5, {opacity: 0})




// ease: Circ.easeOut