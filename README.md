# Fargate Node Example

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/kcearns/fargate-node-example)


## Requirements

You will need the AWS CLI installed to run the `aws cloudformation` commands. Refer to [this](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) link to install.

Create 3 AWS SSM parameters of type string:

* GithubRepo [GitHub repo name]
* GithubUserName [GitHub account name]
* GithubOAuthToken [GitHub token]

Refer to this [link](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) on how to create a GitHub token.

[This](https://medium.com/swlh/aws-cloudformation-managed-complete-ecs-infrastructure-including-ci-cd-pipeline-from-github-to-ecs-b833bb44e01c) fantastic post by Suminda Niroshan was used as the basis for the CloudFormation templates.

## Deploy CloudFormation Stacks

 `aws cloudformation create-stack --stack-name node-fargate-example --template-body file://./CloudFormation/pipeline.yml --capabilities CAPABILITY_IAM`

 ## Delete CloudFormation Stacks

Navigate to the CloudFormation AWS console and delete the two stacks created by the templates. One will be named 'node-fargate-example'. 

The other will be follow the format outlined in the pipeline.yml file: [stage]-[accountId]-FargateECSCluster'

Alternatively, you can run the `aws cloudformation delete-stack --stack-name [STACK NAME]` command.


