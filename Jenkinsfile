pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "sudo rm -r /var/lib/jenkins/workspace/Frontend/build"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -r /var/www/html/*"
                sh "sudo cp /home/ubuntu/frontend/htaccess /var/www/html/.htaccess"
                sh "sudo mv /var/lib/jenkins/workspace/Frontend/build/* /var/www/html"
            }
        }
    }
}
