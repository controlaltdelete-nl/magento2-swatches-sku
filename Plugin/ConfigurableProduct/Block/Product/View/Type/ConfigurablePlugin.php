<?php
/**
 *    ______            __             __
 *   / ____/___  ____  / /__________  / /
 *  / /   / __ \/ __ \/ __/ ___/ __ \/ /
 * / /___/ /_/ / / / / /_/ /  / /_/ / /
 * \______________/_/\__/_/   \____/_/
 *    /   |  / / /_
 *   / /| | / / __/
 *  / ___ |/ / /_
 * /_/ _|||_/\__/ __     __
 *    / __ \___  / /__  / /____
 *   / / / / _ \/ / _ \/ __/ _ \
 *  / /_/ /  __/ /  __/ /_/  __/
 * /_____/\___/_/\___/\__/\___/
 *
 */

namespace ControlAltDelete\SwatchesSku\Plugin\ConfigurableProduct\Block\Product\View\Type;

use Magento\ConfigurableProduct\Block\Product\View\Type\Configurable;
use Magento\Framework\Serialize\Serializer\Json;

class ConfigurablePlugin
{
    /**
     * @var Json
     */
    private $json;

    public function __construct(
        Json $json
    ) {
        $this->json = $json;
    }

    public function afterGetJsonConfig(Configurable $subject, string $result): string
    {
        $data = $this->json->unserialize($result);
        $data['skus'] = [];

        foreach ($subject->getAllowProducts() as $simpleProduct) {
            $data['skus'][$simpleProduct->getId()] = $simpleProduct->getSku();
        }

        return $this->json->serialize($data);
    }
}
