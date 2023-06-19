import React from 'react'
import "./Info.css"
import Footer from '../footer';

const Info = () => {
  return (

   <div className='info'>
    {/* <div className='heading'>
      SORTING ALGORITHMS
    </div> */}
    <div className="knowmore">
     
     {/* <div className='button-1'><button className='button-1'>Bubble Sort</button></div> */}
     
     {/* <div className='button-2'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/bubble-sort/", "_blank")}>Bubble Sort</button></div> */}
     {/* <div className='button-3'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/heap-sort/", "_blank")}>Heap Sort</button></div> */}
     {/* <div className='button-4'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/insertion-sort/", "_blank")}>Insertion Sort</button></div> */}
     {/* <div className='button-5'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/merge-sort/", "_blank")}>Merge Sort</button></div> */}
     {/* <div className='button-6'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/selection-sort/", "_blank")}>Selection Sort</button></div> */}
     {/* <div className='button-7'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/sorting-algorithms/", "_blank")}>Twist Sort</button></div> */}
     {/* <div className='button-8'><button className='button-a'onClick={()=> window.open("https://www.geeksforgeeks.org/quick-sort/", "_blank")}>Quick sort</button></div> */}

     <section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src="https://i.pinimg.com/736x/ce/f8/ba/cef8baafc999b818e5c0fe57b4ef170f.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h2>Bubble Sort Algorithm</h2>
        <p>
        Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
        </p>
        <a href="https://www.geeksforgeeks.org/bubble-sort/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://i.pinimg.com/originals/9b/c7/1e/9bc71ec2a00a4cb0d929c255d5b76e93.png" alt="" />
      </figure>
      <div className="article-body">
        <h2>Selection Sort Algorithm</h2>
        <p>
        The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted. 
        </p>
        <a href="https://www.geeksforgeeks.org/selection-sort/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://www.gadgetronicx.com/insertion-sort-algorithm/insertion-sort-algorithm-2/" alt="" />
      </figure>
      <div className="article-body">
        <h2>Insertion Sort Algorithm</h2>
        <p>
        To sort an array of size N in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
        </p>
        <a href="https://www.geeksforgeeks.org/insertion-sort/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>



<br />


<section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <img src="https://www.freecodecamp.org/news/content/images/2022/03/merge-sort-main-1.png" alt="" />
      </figure>
      <div className="article-body">
        <h2>Merge Sort Algorithm</h2>
        <p>
        Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.
        </p>
        <a href="https://www.geeksforgeeks.org/merge-sort/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/TV-Quick-sort-in-DS.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h2>Quick Sort Algorithm</h2>
        <p>
        QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.
        </p>
        <a href="https://www.geeksforgeeks.org/quick-sort/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <img src="https://cdn.educba.com/academy/wp-content/uploads/2019/10/Heap-Sort-in-C.png" alt="" />
      </figure>
      <div className="article-body">
        <h2>Heap Sort Algorithm</h2>
        <p>
        Heap sort is a comparison-based sorting technique based on Binary Heap data structure. It is similar to the selection sort where we first find the minimum element and place the minimum element at the beginning. Repeat the same process for the remaining elements.
        </p>
        <a href="https://www.geeksforgeeks.org/heap-sort/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</section>
     
     <div className='footer'><Footer/></div>
    </div>
    </div>
    
  )
}

export default Info