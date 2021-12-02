<h1>LAB4</h1>

Die Aufgabe war:

- Aufestezen und Konfiguration eines AKS in Azure

- Konfiguration und deplyoment von Wordpress incl. MySQL in dem AKS cluster. 

Url: http://20.103.42.163/

<h3>Cluster in Azure</h3>

![image](https://user-images.githubusercontent.com/55872843/144470329-d9e8725e-e29a-4970-a7c6-5037d4d10aa1.png)

<h3>Wordpress im Browser</h3>

![image](https://user-images.githubusercontent.com/55872843/144470460-2a87692e-70dc-4393-a336-b1ea453e50c5.png)

<h2>Meine Schritt für Schritt Anleitung</h2>

- az group create --location azure_region --name name_of_resource_group
- az aks get-versions --location region_name 
- az aks create --resource-group name_of_resource_group --name name_of_aks_cluster --node-count 2 --kubernetes-version 1.22.2
- az aks show --name name_of_aks_cluster --resource-group name_of_resource_group
- az aks get-credentials --name name_of_aks_cluster --resource-group name_of_resource_group
- kubectl get nodes
- az mysql flexible-server create --public-access <YOUR-IP-ADDRESS>
- kubectl apply -f <FILENAME>.yaml
- kubectl get service php-svc --watch
