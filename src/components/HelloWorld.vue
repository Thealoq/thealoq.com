<template>
  <div>
    <div>
      <div class="bg">
        <center>
          <img
            src="https://cdn.discordapp.com/attachments/605130756729077762/895016288638869534/thealoq.gif"
            alt=""
          />
          <h1>Thealoq Code</h1>
          <h4>Wannabe fullstack developer</h4>
          <div class="icon">
            <a href="/">
              <i class="fab fa-discord"></i>
            </a>
            <a href="/">
              <i class="fab fa-github"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </center>
      </div>
      <div>
        <div class="bg2">
          <center>
            <div class="plus">
              <h3>Hello I'm Thealoq</h3>
              <h4>
                Hello, I am 21 years old and I've been developing software for a
                year
              </h4>
              <div class="easy">
                <a href="/"> And Languages I Use </a>
              </div>
              <div class="boxs">
                <div class="Nodejs box">
                  <a href="/"> Node.js </a>
                </div>
                <div class="js box">
                  <a href="/"> Js </a>
                </div>
                <div class="cplus box">
                  <a href="/"> C++ </a>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
    <div class="bg3">
      <center>
        <h2>Projelerim</h2>

        <div v-if="repos.length" class="projeler">
          <div v-for="repo of repos" :key="repo.id" class="proje">
            <a :href="repo.html_url"> {{ repo.name }} </a>
            <div class="icon">
              <a style="color: white; font-size: 15px" :href="repo.html_url">
                {{ repo.stargazers_count }}
              </a>
              <svg
                style="fill: white"
                id="star_svg"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                class="star"
                viewBox="0 0 576 512"
              >
                <path
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </center>
    </div>
    <div>
      <center class="big">
        <footer class="footer">
          <div>
            © 2021 All rights reserved. Made with ❤ by
            <a
              href="https://github.com/ThealoqJS"
              rel="noreferrer"
              target="_blank"
              >Thealoq</a
            >
            using
            <a
              href="https://vuejs.org"
              rel="noreferrer"
              target="_blank"
              class=""
              >VueJs</a
            >
          </div>
        </footer>
      </center>
    </div>
  </div>
</template>

<script lang="js">


export default {
  name: "data",
  data() {
    return {
      repos: [],
    };
  },
  methods: {
    async formatDate(de) {
              var monthNames = [
          "Ocak", "Şubat", "Mart",
          "Nisan", "Mayıs", "Haziran", "Temmuz",
          "Ağustos", "Eylül", "Ekim",
          "Kasım", "Aralık"
        ];
        var date = new Date(de);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return day +"-" + monthNames[monthIndex] + "-"+ year;
    },
    async getDataFromGithub() {
        const url = `https://api.github.com/users/thealoqjs/repos`;
        const data = await fetch(url);
        const body = await data.json();
        this.repos = body;
    }
  },
  created: function () {
    this.getDataFromGithub();
    }
};
</script>

<style>
svg {
  width: 15px;
  margin-left: 2rem;
  margin-top: -18px;
}

.footer {
  padding: 3rem;
  background-color: #282a36;
}

.footer a {
  text-decoration: none;
}
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
.bg2 {
  margin-top: -4rem;
  padding: 2rem;
  background-color: #282a36;
}
nav a {
  text-decoration: none;
  color: white;
  font-size: 20px;
}

.easy a {
  text-align: center;
  text-decoration: none;
  color: white;
}

.bg3 {
  text-align: center;
  padding: 1rem;
  background-color: #383a59;
}

.box a {
  text-decoration: none;
  color: white;
  width: 1rem;
}
.proje {
  border-radius: 5px;
  background-color: #282a36;
  width: 20rem;
  text-align: center;
  margin: 1rem;
  padding: 7px;
  display: flex;
  justify-content: space-between;
  padding: 4px 2%;
  flex: wrap;
}

.icon {
  margin-top: 17px;
}

.icon a {
  color: white;
}

.proje a {
  text-decoration: none;
  color: white;
  margin: 1rem;
}

.box {
  background-color: #383a59;
  padding: 7px;
  margin: 1rem;
  width: 7rem;
  border-radius: 5px;
}
.projeler {
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.boxs {
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: wrap;
}

.bg2 h4,
h3 {
  text-align: center;
  width: 40rem;
}

.bg img {
  border-radius: 50%;
}

h1 {
  margin-top: 2rem;
}

h3,
h2 {
  color: #8be9fd;
}

.icon a {
  color: #8be9fd;
  font-size: 25px;
  margin-left: 1rem;
}

.Nodejs {
  background-color: rgb(22, 77, 15);
}
.js {
  background-color: rgb(212, 214, 91);
}
.js a {
  color: rgb(0, 0, 0);
}

.cplus {
  background-color: rgb(21, 105, 214);
}

b {
  color: #8be9fd;
}

.icon {
  gap: 2;
}
.bg h1 {
  margin-top: 2rem;
  color: #8be9fd;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  background-color: #282a36;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.bg {
  padding: 2rem;
  background-color: #383a59;
}

nav {
  padding: 1rem 3%;
  background-color: #282a36;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.texts {
  display: flex;
}

.texts a {
  text-decoration: none;
  margin-left: 1rem;
  display: flex;
}

.texts a:hover {
  text-decoration-line: underline;
  text-underline-offset: 4px;
  color: #c9e7ef;
}
.app a:hover {
  text-decoration-line: underline;
  text-underline-offset: 4px;
  color: #c9e7ef;
}

@media only screen and (max-device-width: 480px) {
  .plus h3 {
    margin-left: -12rem;
  }

  .plus h4 {
    width: 17rem;
  }
  .projeler {
    display: block;
  }

  body {
    width: 20rem;
  }

  .proje {
    background-color: transparent;
    display: block;
    margin-left: 0;
    padding: 0;
    justify-content: none;
    max-width: fit-content;
    text-align: center;
    margin-left: 90px;
  }

  .bg2 {
    margin-top: 2rem;
  }

  nav {
    padding: 1rem;
  }

  .big {
    display: block;
  }

  .proje a {
    display: block;
    margin-left: 0;
  }

  .icon {
    display: none;
  }
}
</style>
