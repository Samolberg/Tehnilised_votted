const load = () => {
    axios.get('http://roodkristo.ikt.khk.ee/cockpit/api/collections/get/loomad')
    .then((response) => {
        console.log(response.data.entries);

//        let content = document.createElement('ul');

        response.data.entries.forEach((element) => {
            let div = document.createElement('div');
            let t = document.createTextNode(element.nimi);
            let p = document.createElement('p');
//            let li = document.createElement('li');
//            let t = document.createTextNode(element.nimi);

            let img = document.createElement('img');
            img.src = element.pilt.path;
            
            div.appendChild(img);
            p.appendChild(t);
            div.appendChild(p);
//            li.appendChild(t);
//            content.appendChild(li);
            document.querySelector('#app').appendChild(div);
//            document.querySelector('#app1').appendChild();            
        })

        

    })
    .catch((error) => {
        console.log(error);
    })
}

window.onload = load;