function HideBar(bar, width) {
    window.addEventListener('load', function () {
        window.addEventListener('resize', function () {
            if (window.innerWidth < width) {
                bar.style.display = 'none';
            }
            else {
                bar.style.display = 'block';
            }
        })
    })
}
function MoveBar(bar,target,width)
{
    var showtime=0;
    var hidetime=0;
    window.addEventListener('pageshow', function () {
        if (window.innerWidth < width)
        {
            bar.style.display = 'none';
        }
        else
        {
            bar.style.display = 'block';
        }
    })
    window.addEventListener('load', function () {
        window.addEventListener('resize', function () {
            bar.style.display = 'block';
            if (window.innerWidth < width)
            {
                if(hidetime==0)
                {
                    bar.classList.toggle(target);
                    hidetime++;
                }
                showtime=0;
            }
            else
            {
                if(showtime==0 && hidetime!=0)
                {
                    bar.classList.toggle(target);
                    showtime++;
                    hidetime=0;
                }
            }
        })
    })
}


