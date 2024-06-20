# Install Angular CLI
npm install -g @angular/cli

# Create a new Angular project
ng new instagram-clone
Which stylesheet format would you like to use? CSS
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? YES

# Navigate to the project directory
cd .\instagram-clone\

# Add the Express Engine to the project
ng add @nguniversal/express-engine

# Start the development server
ng serve

# Build the production application
ng build --prod