const k8s = require('@kubernetes/client-node');

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