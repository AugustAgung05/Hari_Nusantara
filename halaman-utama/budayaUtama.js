let slider = document.querySelector('.slider-img');

        function moveNext() {
            let items = document.querySelectorAll('.items');
            slider.appendChild(items[0]);
        }

        function movePrev() {
            let items = document.querySelectorAll('.items');
            slider.prepend(items[items.length - 1]);
        }

        slider.addEventListener('wheel', function(event) {
            event.preventDefault();
            if (event.deltaY > 0) {
                moveNext();
            } else {
                movePrev();
            }
        });