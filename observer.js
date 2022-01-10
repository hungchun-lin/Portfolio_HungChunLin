const exps = document.querySelectorAll('#work-exp-content');
const edus = document.querySelectorAll('#edu-content');
const pubs = document.querySelectorAll('#pub-content');

var kk = document.querySelector(".Work-Exp")


var id_mapping = {
    'work-exp-content': kk,
    'edu-content': document.querySelector(".Edu"),
    'pub-content': document.querySelector(".Pub")
}
var keys = Object.keys(id_mapping)

const appearOptions = {
    threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                keys.forEach(key => {
                    (id_mapping[key]).classList.remove('isReading');
                })
                return;
            } else {
                
                keys.forEach(key => {
                    if (key == entry.target.id) {
                        id_mapping[key].classList.add('isReading');
                    } else {
                        id_mapping[key].classList.remove('isReading');
                    }
                })
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

exps.forEach(exp => {
    appearOnScroll.observe(exp);
});

edus.forEach(edu => {
    appearOnScroll.observe(edu);
});

pubs.forEach(pub => {
    appearOnScroll.observe(pub);
});