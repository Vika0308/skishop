/*let el = document.getElementsByClassName('menu-item');
	for(let i=0; i<el.length; i++) {
		el[i] = addEventListener('mouseenter', showSub , false);
		el[i] = addEventListener('mouseleave', hideSub, false);
	}

	function showSub(){
		if(this.children.length>1){
			this.children[1].style.overflow = 'visible';
			this.children[1].style.height = 'auto';
			this.children[1].style.opacity = '1';
		} else {
			return false;
		}
	}

	function hideSub(){
		if(this.children.length>1){
			this.children[1].style.overflow = 'hidden';
			this.children[1].style.height = '0';
			this.children[1].style.opacity = '0';
		} else {
			return false;
		}
	}*/

	document.getElementById('menulist').onmouseover = function(event){
		let target = event.target;
		if (target.className == 'menu-item'){
			let s = target.getElementsByClassName('submenu');
			s[0].style.display = 'block';
		}
	}

	document.onmouseover = function(event){
		let target = event.target;
		if (target.className != 'menu-item' && target.className != 'submenu'){
			closeMenu();
		}
	}

	function closeMenu(){
		let menu = document.getElementById('menulist');
		let subm = document.getElementsByClassName('submenu');
			for(i=0; i<subm.length; i++) {
				subm[i].style.display = "none";
			}
	}