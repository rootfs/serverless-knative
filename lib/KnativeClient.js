const k8s = require('@kubernetes/client-node');
const knativeServingServiceJson = `{
    "apiVersion": "serving.knative.dev/v1alpha1",
    "kind": "Service",
    "metadata": {
        "name": "",
        "namespace": ""
    },
    "spec": {
        "runLatest": {
            "configuration": {
                "revisionTemplate": {
                    "spec": {
                        "container": {
                            "image": "",
                            "name": "",
                            "resources": {}
                        },
                        "timeoutSeconds": 300
                    }
                }
            }
        }
    }
}`

async function getService(ns, svc) {
    try {
        const kc = new k8s.KubeConfig();
        kc.loadFromDefault();
        const client = kc.makeApiClient(k8s.CustomObjectsApi)
        const res = await client.getNamespacedCustomObject(
            'serving.knative.dev',
            'v1alpha1',
            ns,
            'services',
            svc
        );
        return res.body;
    } catch (err) {
        console.log('error ', err);
    }
}

async function createService(ns, name, image, svc) {
    try {
        var svc = JSON.parse(knativeServingServiceJson);
        svc.metadata.name = name;
        svc.metadata.namespace = ns;
        svc.spec.runLatest.configuration.revisionTemplate.spec.container.image = image;
        const kc = new k8s.KubeConfig();
        kc.loadFromDefault();
        const client = kc.makeApiClient(k8s.CustomObjectsApi)
        const res = await client.createNamespacedCustomObject(
            'serving.knative.dev',
            'v1alpha1',
            ns,
            'services',
            svc,
            true
        )
    } catch (err) {
        console.log('error ', err);
    }
}
