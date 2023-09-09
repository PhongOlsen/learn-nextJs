pipeline {
    agent any

    environment {
        BRANCH_BUILD = `${env.BRANCH_BUILD}`
        REPO_GIT_HUB_URL = `${env.REPO_GIT_HUB_URL}`
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${env.BRANCH_BUILD}", url: "${env.REPO_GIT_HUB_URL}"
                sh "git pull origin ${env.BRANCH_BUILD}"
            }
        }
        stage('Checkout Node Version') {
            steps {
                sh 'node -v'
            }
        }
        stage('Check Docker Version And Build') {
            steps {
                sh 'docker version'
                sh 'docker images'
                sh 'docker build -t learn-next .'
            }
        }
        stage('Deployment image to ECR') {
            steps {
                sh 'aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 396530717502.dkr.ecr.ap-southeast-1.amazonaws.com'
            }
        }
        stage('Check Docker Compose Version') {
            steps {
                sh 'docker-compose --version'
            }
        }
        stage("Build") {
            steps {
                echo "Hello World Build"
            }
        }
        stage("Deployment") {
            steps {
                echo "Hello World Deployment"
            }
        }
    }
}
