/**
* AWS Service Catalog Project

 */


// This is an array of AWS services that were asked in the AWS Solution Architect Exam
const services = [
  
  { name: "Amazon EC2", category: "Compute", yearCreated: 2006, logo: "./images/Arch_Amazon-EC2_48.svg", url: "https://aws.amazon.com/ec2/" },
  { name: "AWS Lambda", category: "Compute", yearCreated: 2014, logo: "./images/Arch_AWS-Lambda_48.svg", url: "https://aws.amazon.com/lambda/" },
  { name: "Amazon ECS", category: "Compute", yearCreated: 2015, logo: "./images/Arch_Amazon-Elastic-Container-Service_48.svg", url: "https://aws.amazon.com/ecs/" },
  { name: "Amazon EKS", category: "Compute", yearCreated: 2018, logo: "./images/Arch_Amazon-Elastic-Kubernetes-Service_48.svg", url: "https://aws.amazon.com/eks/" },
  { name: "AWS Fargate", category: "Compute", yearCreated: 2017, logo: "./images/Arch_AWS-Fargate_48.svg", url: "https://aws.amazon.com/fargate/" },
  { name: "AWS Elastic Beanstalk", category: "Compute", yearCreated: 2011, logo: "./images/Arch_AWS-Elastic-Beanstalk_48.svg", url: "https://aws.amazon.com/elasticbeanstalk/" },
  { name: "AWS Batch", category: "Compute", yearCreated: 2016, logo: "./images/Arch_AWS-Batch_48.svg", url: "https://aws.amazon.com/batch/" },
  
  // Storage Services
  { name: "Amazon S3", category: "Storage", yearCreated: 2006, logo: "./images/Arch_Amazon-Simple-Storage-Service_48.svg", url: "https://aws.amazon.com/s3/" },
  { name: "Amazon EBS", category: "Storage", yearCreated: 2008, logo: "./images/Arch_Amazon-Elastic-Block-Store_48.svg", url: "https://aws.amazon.com/ebs/" },
  { name: "Amazon S3 Glacier", category: "Storage", yearCreated: 2012, logo: "./images/Arch_Amazon-Simple-Storage-Service-Glacier_48.svg", url: "https://aws.amazon.com/glacier/" },
  { name: "AWS Storage Gateway", category: "Storage", yearCreated: 2012, logo: "./images/Arch_AWS-Storage-Gateway_48.svg", url: "https://aws.amazon.com/storagegateway/" },
  { name: "AWS Snow Family", category: "Storage", yearCreated: 2016, logo: "./images/Arch_AWS-Snowball_48.svg", url: "https://aws.amazon.com/snow/" },
  
  // Database Services
  { name: "Amazon RDS", category: "Database", yearCreated: 2009, logo: "./images/Arch_Amazon-RDS_48.svg", url: "https://aws.amazon.com/rds/" },
  { name: "Amazon DynamoDB", category: "Database", yearCreated: 2012, logo: "./images/Arch_Amazon-DynamoDB_48.svg", url: "https://aws.amazon.com/dynamodb/" },
  { name: "Amazon Aurora", category: "Database", yearCreated: 2014, logo: "./images/Arch_Amazon-Aurora_48.svg", url: "https://aws.amazon.com/aurora/" },
  { name: "Amazon ElastiCache", category: "Database", yearCreated: 2011, logo: "./images/Arch_Amazon-ElastiCache_48.svg", url: "https://aws.amazon.com/elasticache/" },
  { name: "Amazon Redshift", category: "Database", yearCreated: 2013, logo: "./images/Arch_Amazon-Redshift_48.svg", url: "https://aws.amazon.com/redshift/" },
  { name: "Amazon Neptune", category: "Database", yearCreated: 2018, logo: "./images/Arch_Amazon-Neptune_48.svg", url: "https://aws.amazon.com/neptune/" },
  { name: "Amazon DocumentDB", category: "Database", yearCreated: 2019, logo: "./images/Arch_Amazon-DocumentDB_48.svg", url: "https://aws.amazon.com/documentdb/" },
  
  // Networking & Content Delivery
  { name: "Amazon VPC", category: "Networking", yearCreated: 2009, logo: "./images/Arch_Amazon-Virtual-Private-Cloud_48.svg", url: "https://aws.amazon.com/vpc/" },
  { name: "Amazon Route 53", category: "Networking", yearCreated: 2011, logo: "./images/Arch_Amazon-Route-53_48.svg", url: "https://aws.amazon.com/route53/" },
  { name: "Elastic Load Balancing", category: "Networking", yearCreated: 2009, logo: "./images/Arch_Elastic-Load-Balancing_48.svg", url: "https://aws.amazon.com/elasticloadbalancing/" },
  { name: "AWS Direct Connect", category: "Networking", yearCreated: 2011, logo: "./images/Arch_AWS-Direct-Connect_48.svg", url: "https://aws.amazon.com/directconnect/" },
  { name: "Amazon CloudFront", category: "Networking", yearCreated: 2008, logo: "./images/Arch_Amazon-CloudFront_48.svg", url: "https://aws.amazon.com/cloudfront/" },
  { name: "AWS Global Accelerator", category: "Networking", yearCreated: 2018, logo: "./images/Arch_AWS-Global-Accelerator_48.svg", url: "https://aws.amazon.com/global-accelerator/" },
  { name: "AWS Transit Gateway", category: "Networking", yearCreated: 2018, logo: "./images/Arch_AWS-Transit-Gateway_48.svg", url: "https://aws.amazon.com/transit-gateway/" },
  
  // Security Services
  { name: "AWS IAM", category: "Security", yearCreated: 2010, logo: "./images/Arch_AWS-Identity-and-Access-Management_48.svg", url: "https://aws.amazon.com/iam/" },
  { name: "Amazon Cognito", category: "Security", yearCreated: 2014, logo: "./images/Arch_Amazon-Cognito_48.svg", url: "https://aws.amazon.com/cognito/" },
  { name: "AWS WAF", category: "Security", yearCreated: 2015, logo: "./images/Arch_AWS-WAF_48.svg", url: "https://aws.amazon.com/waf/" },
  { name: "AWS Shield", category: "Security", yearCreated: 2016, logo: "./images/Arch_AWS-Shield_48.svg", url: "https://aws.amazon.com/shield/" },
  { name: "AWS KMS", category: "Security", yearCreated: 2014, logo: "./images/Arch_AWS-Key-Management-Service_48.svg", url: "https://aws.amazon.com/kms/" },
  { name: "AWS Secrets Manager", category: "Security", yearCreated: 2018, logo: "./images/Arch_AWS-Secrets-Manager_48.svg", url: "https://aws.amazon.com/secrets-manager/" },
  
  // Management Services
  { name: "Amazon CloudWatch", category: "Management", yearCreated: 2009, logo: "./images/Arch_Amazon-CloudWatch_48.svg", url: "https://aws.amazon.com/cloudwatch/" },
  { name: "AWS CloudTrail", category: "Management", yearCreated: 2013, logo: "./images/Arch_AWS-CloudTrail_48.svg", url: "https://aws.amazon.com/cloudtrail/" },
  { name: "AWS Config", category: "Management", yearCreated: 2014, logo: "./images/Arch_AWS-Config_48.svg", url: "https://aws.amazon.com/config/" },
  { name: "AWS CloudFormation", category: "Management", yearCreated: 2011, logo: "./images/Arch_AWS-CloudFormation_48.svg", url: "https://aws.amazon.com/cloudformation/" },
  { name: "AWS Systems Manager", category: "Management", yearCreated: 2017, logo: "./images/Arch_AWS-Systems-Manager_48.svg", url: "https://aws.amazon.com/systems-manager/" },
  
  // Integration Services
  { name: "Amazon SQS", category: "Integration", yearCreated: 2006, logo: "./images/Arch_Amazon-Simple-Queue-Service_48.svg", url: "https://aws.amazon.com/sqs/" },
  { name: "Amazon SNS", category: "Integration", yearCreated: 2010, logo: "./images/Arch_Amazon-Simple-Notification-Service_48.svg", url: "https://aws.amazon.com/sns/" },
  { name: "Amazon EventBridge", category: "Integration", yearCreated: 2019, logo: "./images/Arch_Amazon-EventBridge_48.svg", url: "https://aws.amazon.com/eventbridge/" },
  { name: "AWS Step Functions", category: "Integration", yearCreated: 2016, logo: "./images/Arch_AWS-Step-Functions_48.svg", url: "https://aws.amazon.com/step-functions/" },
  { name: "Amazon API Gateway", category: "Integration", yearCreated: 2015, logo: "./images/Arch_Amazon-API-Gateway_48.svg", url: "https://aws.amazon.com/api-gateway/" }
];

// a mutalbe copy of the original array
let mutableServices = [...services]

// funtion to disply content of the card
function displayServices(serviceShow) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  
  for (let i = 0; i < serviceShow.length; i++) {
    const service = serviceShow[i];
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, service); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}


// show all services
function showCards() {
  mutableServices = [...services]
  displayServices(mutableServices)
}

//show only compute services

function showCompute() {
  mutableServices = services.filter(service => service.category === "Compute")
  displayServices(mutableServices)
} 


//show storage only
function showStorage() {
  mutableServices = services.filter(service => service.category === "Storage")
  displayServices(mutableServices)
}

// show database only
function showDatabase() {
  mutableServices = services.filter(service => service.category === "Database")
  displayServices(mutableServices)
}

function showNetworking() {
  mutableServices = services.filter(service => service.category === "Networking")
  displayServices(mutableServices)
}

function showSecurity() {
  mutableServices = services.filter(service => service.category === "Security")
  displayServices(mutableServices)
}

function showManagement() {
  mutableServices = services.filter(service => service.category === "Management")
  displayServices(mutableServices)
}

function showIntegration() {
  mutableServices = services.filter(service => service.category === "Integration")
  displayServices(mutableServices)
}

function editCardContent(card, service) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = service.name;

  const cardImage = card.querySelector("img");
  cardImage.src = service.logo;
  cardImage.alt = service.name + " Logo";

  const cardCategory = card.querySelector(".category")
  cardCategory.innerHTML = "<strong>Category:</strong> " + service.category

  const cardYear = card.querySelector(".year")
  cardYear.innerHTML = "<strong>Year Created:</strong> " + service.yearCreated
  
  
  card.style.cursor = "pointer";

  card.onclick = function() {
    window.open(service.url, '_blank');
  }

  console.log("new card:", service, "- html: ", card);
}




document.addEventListener("DOMContentLoaded", showCards);


// sort funtion
function sortOldest() {
  mutableServices.sort((a,b) => {
    return a.yearCreated - b.yearCreated
  })
  displayServices(mutableServices)
}

function sortNewest() {
  mutableServices.sort((a,b) => {
    return b.yearCreated - a.yearCreated
  })
  displayServices(mutableServices)
}

function removeLastCard() {
  mutableServices.pop(); // Remove last item in array
  displayServices(mutableServices); // Call showCards again to refresh
}


function addAService(name, category, yearCreated, logoUrl, url) {
  const newService = {
    name: name,
    category: category,
    yearCreated: yearCreated,
    logo: logoUrl || "./images/Arch_Amazon-EC2_48.svg",
    url: url || "#"
  };
  
  services.push(newService);
  mutableServices = [...services];
  displayServices(mutableServices);
  
  return newService;
}


function addServiceFromForm() {
  const name = document.getElementById('serviceName').value;
  const category = document.getElementById('serviceCategory').value;
  const yearCreated = parseInt(document.getElementById('serviceYear').value);
  const logo = document.getElementById('serviceLogo').value;
  const url = document.getElementById('serviceUrl').value;
  
  if (!name || !category || !yearCreated) {
    alert('Please fill in at least the name, category, and year!');
    return;
  }
  
  
  addAService(name, category, yearCreated, logo, url);
  
  
  document.getElementById('serviceName').value = '';
  document.getElementById('serviceYear').value = '';
  document.getElementById('serviceLogo').value = '';
  document.getElementById('serviceUrl').value = '';
}