pipeline {
    agent any

    stages {
        stage('Build image') {
            steps {
                script {
                    sh "docker build -t connex-automation ."
                }
            }
        }

        stage('Run test') {
            steps {
                script {
                    sh "export CYPRESS_ENV=stag;docker run --ipc=host --rm -v \$(pwd)/target/allure-results:/home/app/allure-results -v \$(pwd)/cypress:/home/app/cypress connex-automation npm run ${feature}"
                    sh "sudo chmod -R 777 target"
                }
            }
        }

        stage('reports') {
            steps {
                script {
                    allure([
                            includeProperties: false,
                            jdk: '',
                            properties: [],
                            reportBuildPolicy: 'ALWAYS',
                            results: [[path: 'target/allure-results']]
                    ])
                }
            }
        }
    }
}