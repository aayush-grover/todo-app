

var list = document.querySelector('#movie-list ul');

 list.addEventListener('click', function(e){
   if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
     //console.log(e.target);
     var li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
     //console.log(li);
     //li.parentNode.removeChild(li);
     list.removeChild(li);

   }
 })

// for hide the list:::::

var hide=document.getElementById('hide');
hide.addEventListener('click',function(e){
    if(hide.checked == true){
        list.hidden= true;
    }else if(hide.checked == false){
        list.hidden= false;
    }
});

// code below is for add a movie to list::::

var form = document.forms['add-movie'];
form.addEventListener('submit',function(e){
    
    e.preventDefault();
    
    var vall=form.querySelector('input[type="text"]').value;
    
    var li=document.createElement('li');
    
    var muvi=document.createElement('span');
    
    var del=document.createElement('span');
    
    li.appendChild(muvi);
    li.appendChild(del);
    list.appendChild(li);

    muvi.textContent = vall;
    del.textContent = 'delete';
    
    muvi.classList.add('name');
    del.classList.add('delete');
    

});

// below code is now working for searching a movie;

var searchMovie = document.querySelector('input[type="text"]');
searchMovie.addEventListener('keyup',function(e){
    var fltr = searchMovie.value.toUpperCase();
    var list= document.querySelector('#movie-list ul');
    var fullli = list.querySelectorAll('li');
    var li = list.querySelectorAll('li .name');
     for(i=0;i<li.length;i++){
        var a=li[i].textContent;
        var txtvalue = a.toUpperCase();
         if(txtvalue.indexOf(fltr) > -1){
            fullli[i].style.display = "";
        }else{
            fullli[i].style.display = "none";
        }
    }
});