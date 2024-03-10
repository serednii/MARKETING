const mailPath = 'http://marketing.nastya03.zzz.com.ua/mail.php'

document.querySelectorAll('.uni-form').forEach( (e) => {

	e.addEventListener('submit', function(e) {
        console.log(e)
		let th      = this,
		    params  = new FormData(this),
		    request = new XMLHttpRequest()

		request.open('POST', mailPath, true)
		request.send(params)

		request.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				setTimeout(function() { th.reset() }, 1000)
				alert('Thank you!')
			}
		}

		e.preventDefault()

	})

})