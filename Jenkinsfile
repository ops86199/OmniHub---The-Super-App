pipeline {
    agent any

    environment {
        IMAGE_NAME = "omnihub-app"
        DOCKERHUB_REPO = "ops86199/omnihub-app" // Replace with your Docker Hub repo
    }

    stages {

        stage('Checkout Code') {
            steps {
                 git url: 'https://github.com/ops86199/OmniHub---The-Super-App.git', branch:'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh" docker build -t omnihub-app:latest .
                
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    sh """
                        docker tag ${omnihub-app}:latest ${ops86199}:latest
                        docker push ${ops86199}:latest
                    """
                }
            }
        }

    }
}
