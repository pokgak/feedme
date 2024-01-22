# SOLUTION

## Multipass VM

```
mp launch lts --name feedme --cpus=2 --memory=8G --disk=50G
```

## setup basic

```
kubectl create ns apps
kubectl create secret docker-registry dockerconfigjson-ghcr-io \
    --docker-server=https://ghcr.io \
    --docker-username=pokgak \
    --docker-password=<gh-auth-token> \
    --namespace=apps
```

## get grafana admin password

```
kubectl get secret --namespace monitoring grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo
```

## create configmap for Baselime

```
kubectl create -napps configmap feedme-config --from-literal=BASELIME_KEY=<baselime-api-key>
```
