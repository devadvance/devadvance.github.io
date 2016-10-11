This is a semi-technical write-up design to explain the background for RootCloak, as well as the principles behind the way it addresses the core problem.

# Background on Rooting

With traditional computing, the concept of having access to both unprivileged and privileged areas of the operating system is not uncommon, and depending on the desktop OS, it has been only recently that privileged access has come under scrutiny. Even still, outside of enterprise environments, the general user is still permitted to make system-level changes to their OS. In fact, with the concept of wholy voluntary system updates, the user is still encouraged to have the final say when it comes to what can and cannot run on their system.

On mobile devices, the privilege model has been vastly different from the start. On both iOS and Android, users are not expected to have, nor generally permitted to have, privileged access to the system or otherwise. Software updates are at the discretion of the OEM and/or carrier, and the fundamental look and feel of the OS is unmodifiable. What an expert user may be able to accomplish on a traditional OS, such as changing a driver, is simply impossible with a locked-down mobile OS.

In order to overcome this limitation, Android devices often can be rooted, which is the process of obtaining superuser access and corresponding privilege on the device. Rooting a device usually requires modifying some portion of the system. On Nexus devices, as the bootloader is unlocked, this simply requires writing custom software to the device via standard mechanisms such as fastboot. On non-developer oriented devices, an exploit is often required to root the device. In nearly all cases, some portion of the core system partition is modified, including putting the "su" binary in a system location.

# Problem addressed

There are dozens (potentially hundreds) of Android apps on the Play Store that attempt to detect devices that are either rooted, or more broadly, have an OS that has been modified in any way from what the OEM and/or carrier provided. There are many reasons for doing this, but fundamentally it is due to the fact that the privilege model, as discussed above, has been different from the start on mobile devices.

In the case of root being detected, most of these apps either run with degraded features, or (more often) simply refuse to run. Depending on the app, an error or other message may be displayed, but some apps will simply quit with no user feedback upon detecting root or modified system.

# How RootCloak Solves This Problem

In order to address this conflict of interests, I attempted to solve the problem in a uniquely acalable and app-agnostic way. As such, RootCloak relies on the following:
* Limited scope: only simple root (e.g. no busybox, no other system modifications, etc.)
* The fact that there is a finite set of root detection approaches
* The fact that the finite set of approaches can only be implemented by an even smaller finite set of interfaces

In practice, what does this mean? Let's look at it by example. On a rooted device, the su binary will most frequently be called "su", and be located in one of a few common directories. One approach that apps use to check for root is simply to see if the su binary exists. Rather than try to overwrite the code on an app-specific basis, I designed RootCloak to catch things like using File or exec to check for the su binary's existence. Thus, it doesn't matter when or where an app tries to check for the su binary; the finite set of fundamental interfaces that an app may use to check for root has been addressed.

Other approaches apps use when checking for root include looking at the installed packages (for things like SuperSu), checking running services, doing ls/pm/ps/etc. using Runtime.exec(), and more.

# Limitations of RootCloak

The Xposed framework allows modules to operate at the Java level, not at the native level. As such, applications that use the NDK to check for root cannot be handled in an app-agnostic way using RootCloak. While this could be addressed on an app-by-app basis, that would violate my original goal in addressing this at the interface level.

To counter this limitation, I built RootCloak Plus using Cydia Substrate, which allows for the interception of syscalls and thus is capable of handling an increased number of root detection approaches. However, Cydia Substrate has not been developed past Android 4.0-4.3, and thus is not an ideal platform going forward.

Additionally, RootCloak does not address the more recent addition of [SafetyNet](https://developer.android.com/training/safetynet/index.html), which goes beyond checking for root and instead evaluates "device compatibility". Projects like [NoDeviceCheck](https://github.com/pylerSM/NoDeviceCheck) are attempts to address this problem space. Another good bit of reading material is [this thread on XDA](http://forum.xda-developers.com/google-nexus-5/help/android-pay-custom-rom-t3199843) about Android Pay and custom ROMs, which has some comments from a Google engineer about the relationship between security and root.

# Further Reading

Check out information about the concept behind LD_PRELOAD.

More coming soon to this doc? Possible.