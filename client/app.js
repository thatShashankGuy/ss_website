function routeController(){
    return {
        init() {
            this.loadPageContent('home');
        },
        loadPageContent(page){
            contentDiv = document.getElementById("content")
            fetch(`routes/${page}/index.html`)
                .then(res => res.text())
                    .then(html => 
                        contentDiv.innerHTML = html
                    ).catch(e=> console.log("failed to load page : " + e.message))
        }
    }
}