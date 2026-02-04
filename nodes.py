import folder_paths
import nodes

class ComfyUICustomNodeExampleVueBasic:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                # 自定义小部件
                "custom-widget": ("CUSTOM_VUE_COMPONENT_BASIC", {}), 
            },
        }
        
    CATEGORY = "examples"
    
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("text",)
    FUNCTION = "run"

    def run(self,  **kwargs):
        print(kwargs["custom-widget"]["text"])

        output_text  = kwargs["custom-widget"]["text"]
        return output_text,

NODE_CLASS_MAPPINGS = {
    "custom-node-name": ComfyUICustomNodeExampleVueBasic
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "custom-node-name": "自定义节点名"
}