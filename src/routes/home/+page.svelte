<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import { downloadResume } from '$lib/index.js'
    const img = 'images/chatting.png'
    const intro = 'Hi I am Shashank - a software engineer based in Bangalore, India'
</script>

<main  >
    <div class="profile-container">
        <img class="profile-image" src={img} alt="">
        <br>
          <section>
            <article>
                <header><strong>About Me</strong></header>
                <p> Thank you for visiting my little site! My name is Shashank, and I am a software engineer with 6 years of experience in IT and technology. 
                I have worked in various roles—from server management to full-stack development to RPA automation engineering. 
                In my current role, I work with various cloud services, from AWS to Azure, building, deploying, and maintaining cloud-native applications and pipelines. 
                To learn more about my work history and experience, please refer to my resume.
            </p><p>
                I am based in India. I love video games and reading, and I prefer hardcopies over digital copies. Between gaming and writing software programs, I spend most of my time in front of various screens. 
                I have also developed a liking for writing technical blogs. I am working on few currently and will be uploading them here in blog section; feel free to check them out.
            </p>
            </article>
        </section>       
        <div class="profile-info">
        <button
        type="submit"
        style="border: 1px solid black; padding : 3% "
        on:click={downloadResume}
      >

       <b style="display: inline;"> &nbsp;Download Resume</b>
      </button></div>   
    </div>
</main>


<style>
    .profile-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* Full height to center everything vertically */
        text-align: center;
        padding: 20px; /* Added padding for better spacing around the edges */
        box-sizing: border-box; /* Ensures padding is included in height calculation */
    }

    .profile-image {
        width: 100%; /* Makes the image responsive */
        max-width: 150px; /* Maximum width to control size on larger screens */
        height: auto; /* Maintains aspect ratio */
        border-radius: 50%; /* Makes the image circular */
        object-fit: cover; /* Ensures the image covers the area without distortion */
    }

    .profile-info {
        margin-top: 20px; /* More space above the button for clearer separation */
    }

    button {
        background-color: white; /* Light background for the button */
        color: black; /* Text color */
        padding: 10px 20px; /* Increased padding for better touch interaction */
        font-size: 1em; /* Slightly larger text for readability */
        border: 2px solid black; /* Solid border that's more noticeable */
        border-radius: 5px; /* Rounded corners */
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effects */
    }

    button:hover {
        background-color: #f0f0f0; /* Light grey background on hover */
        color: #333; /* Darker text on hover */
    }

    button:focus,
    button:focus-visible {
        outline: none; /* Removes default outline */
        box-shadow: 0 0 0 2px #9ea1d2; /* Custom focus style to improve accessibility */
    }
</style>

