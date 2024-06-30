import React from 'react'

const LatestBlogs = () => {
    return (
        <div class="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
    
        <main class="lg:w-2/3">
          <article class="bg-white p-6 rounded-lg shadow-md">
            <img src="https://images.pexels.com/photos/6285116/pexels-photo-6285116.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Post Image" class="w-full rounded-lg mb-4" />
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-2xl font-bold text-zinc-800">Latest Blog</h2>
               <span class="bg-orange-600 text-white px-4 py-2 rounded-full">20</span> 
            </div>
            <h3 class="text-xl font-semibold text-zinc-800 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            <div class="flex items-center text-zinc-500 text-sm mb-4">
              <span class="mr-2">by Admin</span>
              <span class="mr-2">|</span>
              <span class="mr-2">January 1, 2023</span>
              <span class="mr-2">|</span>
              <span>3 Comments</span>
            </div>
            <p class="text-zinc-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla facilisi. Phasellus feugiat, turpis at pulvinar varius, sapien lorem interdum elit, nec bibendum felis nulla sed erat. Proin ut lacus eget elit malesuada aliquet. Suspendisse potenti. Nunc ut eros a erat scelerisque sollicitudin. Sed a dui ut lorem tincidunt vehicula. Nulla facilisi. Phasellus feugiat, turpis at pulvinar varius, sapien lorem interdum elit, nec bibendum felis nulla sed erat.</p>
            <img src="https://images.pexels.com/photos/20450985/pexels-photo-20450985/free-photo-of-friends-sitting-at-a-table.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Author Image" class="w-full rounded-lg mb-4" />
            <p class="text-zinc-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla facilisi. Phasellus feugiat, turpis at pulvinar varius, sapien lorem interdum elit, nec bibendum felis nulla sed erat. Proin ut lacus eget elit malesuada aliquet. Suspendisse potenti. Nunc ut eros a erat scelerisque sollicitudin. Sed a dui ut lorem tincidunt vehicula. Nulla facilisi. Phasellus feugiat, turpis at pulvinar varius, sapien lorem interdum elit, nec bibendum felis nulla sed erat.</p>
          </article>
    
          
          <section class="mt-8">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">3 Comments</h3>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/25002985/pexels-photo-25002985/free-photo-of-young-man-drinking-a-cocktail-on-the-balcony.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" class="w-12 h-12 rounded-full" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Jessie Smith</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/25242271/pexels-photo-25242271/free-photo-of-model-in-an-oversized-suit-jacket-with-earrings-and-nose-rings.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" class="w-12 h-12 rounded-full" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Alex Doe</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/25003282/pexels-photo-25003282/free-photo-of-portrait-of-man-in-hat-smoking.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User Avatar" class="w-12 h-12 rounded-full" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Jessie Smith</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                </div>
              </div>
            </div>
          </section>
    
          
          <section class="mt-8">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">Leave a Comment</h3>
            <form class="space-y-4">
              <div>
                <textarea class="w-full p-4 border border-zinc-300 rounded-lg" rows="4" placeholder="Your comment"></textarea>
              </div>
              <div class="flex space-x-4">
                <input type="text" class="w-1/2 p-4 border border-zinc-300 rounded-lg" placeholder="Your Name" />
                <input type="email" class="w-1/2 p-4 border border-zinc-300 rounded-lg" placeholder="Your Email" />
              </div>
              <button type="submit" class="bg-orange-600 text-white px-6 py-2 rounded-lg">Submit</button>
            </form>
          </section>
        </main>
    
        
        <aside class="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
          <div class="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">Search</h3>
            <form class="flex">
              <input type="text" class="w-full p-4 border border-zinc-300 rounded-l-lg" placeholder="Search..." />
              <button type="submit" class="bg-orange-600 text-white px-6 py-2 rounded-r-lg">Search</button>
            </form>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">Most Viewed Post</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/6285116/pexels-photo-6285116.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post Image" class="w-16 h-16 rounded-lg" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Post Title</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post Image" class="w-16 h-16 rounded-lg" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Post Title</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post Image" class="w-16 h-16 rounded-lg" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Post Title</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">Recent Post</h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post Image" class="w-12 h-12 rounded-lg" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Post Title</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post Image" class="w-12 h-12 rounded-lg" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Post Title</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <img src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Post Image" class="w-12 h-12 rounded-lg" />
                <div>
                  <h4 class="text-zinc-800 font-semibold">Post Title</h4>
                  <p class="text-zinc-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">Categories</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-zinc-600 hover:text-orange-600">Graphic Design</a></li>
              <li><a href="#" class="text-zinc-600 hover:text-orange-600">Adobe Photoshop</a></li>
              <li><a href="#" class="text-zinc-600 hover:text-orange-600">Web Design</a></li>
              <li><a href="#" class="text-zinc-600 hover:text-orange-600">Web Development</a></li>
              <li><a href="#" class="text-zinc-600 hover:text-orange-600">WordPress</a></li>
              <li><a href="#" class="text-zinc-600 hover:text-orange-600">Front End Design</a></li>
            </ul>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">Sign Up for Newsletter</h3>
            <form class="flex">
              <input type="email" class="w-full p-4 border border-zinc-300 rounded-l-lg" placeholder="Your Email" />
              <button type="submit" class="bg-orange-600 text-white px-6 py-2 rounded-r-lg">Submit</button>
            </form>
          </div>
    
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold text-zinc-800 mb-4">Instagram Feed</h3>
            <div class="grid grid-cols-3 gap-2">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/6457515/pexels-photo-6457515.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/6457493/pexels-photo-6457493.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/6457515/pexels-photo-6457515.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/6457493/pexels-photo-6457493.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
              <img src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Instagram Image" class="w-full h-full rounded-lg" />
            </div>
          </div>
        </aside>
      </div>
    
    )
}

export default LatestBlogs