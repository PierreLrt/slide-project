<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerUsLSujx\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerUsLSujx/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerUsLSujx.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerUsLSujx\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerUsLSujx\App_KernelDevDebugContainer([
    'container.build_hash' => 'UsLSujx',
    'container.build_id' => '31a99ac5',
    'container.build_time' => 1587541610,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerUsLSujx');
