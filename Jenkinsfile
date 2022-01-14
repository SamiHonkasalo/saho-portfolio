pipeline{
	agent any
	environment {
        image = "saho-portfolio"
	}
	stages {
		stage('Build') {
            steps {
                sh '''
                    docker build --target production -t $image:latest
                '''
            }
		}
	}
}