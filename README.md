# Dunedle

Dunedle is a wordle spin-off web app game that let's you guess characters from Frank Herbert's Dune universe daily. 

So far characters from the first 4 books are included and information in the categories "height" and "hair color" for example are only estimations and/or based on vague book descriptions or movie/series adaptations. Further improvement ideas on the categories can be done as described in the [Contribution](#Contribution) section below.

# License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](./LICENSE) file for details.

# Contribution

This is a small side-project. Feel free to request features or to suggest improvements in the discussions or issue sections of this repo or to directly create pull-requests. 

# Build/Deployment

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Local Deployment Using Docker

This repo includes a dockerfile to deploy this project on a docker container with nginx. 
To deploy the project using docker, run:

```bash
docker build -t dunedle .
docker run -p 80:80 dunedle
```
You can then visit http://localhost to play

## Web Deployment

To deploy the app as a simple static single page application, build the project as described above in [Building](#Building) and move the contents of the "/dist/dunedle/browser" folder to your web server's folder. Please be aware of the [License](#License) conditions before publicly hosting the website yourself. 
