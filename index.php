<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header id="header">Welcome to My Page</header>
    <main>
        <section id="about">
            <article>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus minima, labore nisi obcaecati nulla voluptas quos beatae adipisci rerum illum!</p>
                <img src="1517430448079.jpg">
            </article>
        </section>
        <section id="service">
            <article>
                <h1>Our Services</h1>
                <ul>
                    <li>Web Development</li>
                    <li>Mobile Development</li>
                    <li>AWS Services</li>
                </ul>
                
            </article>
        </section>
        <section id="video">
            <article>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kqNUcrbg9l4?si=wXWS3sH9Htwstl6X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </article>
        </section>
        <section id="PriceList">
            <article>
            <h1>Price List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Web Development</td>
                        <td>$25/h</td>
                    </tr>
                    <tr>
                        <td>Mobile Development</td>
                        <td>$50/h</td>
                    </tr>
                    <tr>
                        <td>AWS Services</td>
                        <td>$40/h</td>
                    </tr>
                </tbody>
            </table>
            </article>
        </section>
        <section id="connect">
                <article>
                <h1>Connect With Us</h1>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Enter Your Name" required />
                    <br />
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Your Email Address" required />
                    <br />
                    <label for="phone">Phone</label>
                    <input type="number" id="phone" placeholder="Enter Your Phone Number" required />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                </article>
        </section>
    </main>
    <footer id="footer">
        <article>
            Email: <a href="mailto:contactus.abc@gmail.com">contactus.abc@gmail.com</a>
            Phone : <a href="tel:919800000000">+919800000000</a>
        </article>
    </footer>
</body>
</html>