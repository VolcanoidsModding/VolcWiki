---
id: FirstMod
title: First Real Mod
sidebar_label: First Real Mod
---

Delete Class1.cs from your project <br/>
Create new files named TestMod.cs, TestBehaviour.cs <br/>
Replace their content with code below. <br/>

**Result:** <br/>
Text on Exit button in Main Menu will be animated.

**How it works:** <br/>
Mods are loaded before any scene is loaded. <br/>
This particular mod hooks into "sceneLoaded" event. <br/>
When the scene is loaded, callback method is called <br/>
This method tries to find "Exit Button" <br/>
When it finds it, it attaches TestBehaviour to it. <br/>
TestBehaviour finds Text element on the button and animates character spacing. <br/>

**TestMod.cs**
```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.SceneManagement;
using Object = UnityEngine.Object;

namespace VolcanoidsMod
{
    public class TestMod : GameMod
    {
        public override void Load()
        {
            var version = typeof(TestMod).Assembly.GetName().Version;
            var lastWrite = File.GetLastWriteTime(typeof(TestMod).Assembly.Location);
            Debug.Log($"TestMod loaded: {version}, build time: {lastWrite.ToShortTimeString()}");
            
            SceneManager.sceneLoaded += OnSceneLoaded;
        }

        private void OnSceneLoaded(Scene arg0, LoadSceneMode arg1)
        {
            var obj = GameObject.Find("ExitButton");
            if (obj != null)
            {
                obj.AddComponent<TestBehaviour>();
            }
        }

        public override void Unload()
        {
            Debug.Log("TestMod unloaded");
        }
    }
```

**TestBehaviour.cs**
```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.UI;

namespace VolcanoidsMod
{
    class TestBehaviour : MonoBehaviour
    {
        TMPro.TextMeshProUGUI m_text;
        Image m_image;

        void Awake()
        {
            m_text = gameObject.GetComponentInChildren<TMPro.TextMeshProUGUI>();
            m_image = GetComponent<Image>();
        }

        void Update()
        {
            float t = Time.realtimeSinceStartup % 2;
            if (t > 1) t = 2 - t;

            //transform.localScale = Vector3.one * Mathf.Lerp(0.2f, 1.3f, t);
            if (m_text != null)
            {
                m_text.characterSpacing = Mathf.Lerp(0, 100, t);
                m_text.havePropertiesChanged = true;
                m_text.SetAllDirty();
            }
            m_image.enabled = false;
            m_image.enabled = true;
            Canvas.ForceUpdateCanvases();
        }
    }
}
```

![VSCode Installer](/img/anotherImage.png)