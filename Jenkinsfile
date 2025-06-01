pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "mindcare-backend"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE, './backend')
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }

        stage('Test Backend') {
            steps {
                echo "Add backend tests here"
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker-compose down'
        }
    }
}
