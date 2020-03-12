"use strict"

let contactInfo = document.getElementById('contactInfo');
let showContactInfo = document.getElementById('showContactInfo');
    showContactInfo.addEventListener('click', function (){
        let show = false;
        let parentClasses = this.parentElement.classList;
        
        for (const key in parentClasses) {
            if(parentClasses[key] == 'contact_show'){
                show = true;
                break;
            } else {
                show = false;
            }
        }

        if(!show){
            parentClasses.add('contact_show');
            this.classList.remove('contact__button_down');
            this.classList.add('contact__button_up');
            contactInfo.style.display = 'flex';
        } else {
            parentClasses.remove('contact_show');
            this.classList.remove('contact__button_up');
            this.classList.add('contact__button_down');
            contactInfo.style.display = 'none';
        }
        
        
        
        
        
    });
