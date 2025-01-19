export default function Navbar () {
   return(
       <nav className="flex justify-between items-center">
          <img src="https://imgcms.canadalightingexperts.com/site/theme/www_canadalightingexperts_com/canadalightingexperts_logo.png"/>
          <div class="search-bar">
            <input type="search" placeholder="Search for Anything" className="w-5 bg-transparent outline-grey"/>
            <button class="search-icon"><i class="fas fa-search"></i></button>
        </div>
       </nav>
   )
}

